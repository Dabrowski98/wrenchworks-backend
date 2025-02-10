import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import {
  CHECK_ABILITY,
  RequiredRole as RequiredRule,
} from './abilities.decorator';
import { ForbiddenError, subject } from '@casl/ability';
import { Observable } from 'rxjs';
import { AbilityFactory as AbilityFactory } from './ability.factory';
import { GqlExecutionContext } from '@nestjs/graphql';
import { IS_PUBLIC_KEY } from 'src/common/decorators/guard-decorators/public.decorator';

@Injectable()
export class AbilitiesGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly abilityFactory: AbilityFactory,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const rules = this.reflector.getAllAndOverride<RequiredRule[]>(
      CHECK_ABILITY,
      [context.getHandler(), context.getClass()],
    );

    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!rules || isPublic) {
      return true;
    }

    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;
    const user = req.user;
    const employee = req.employee;

    console.log(user);
    console.log(employee);

    if (!user && !employee) {
      throw new UnauthorizedException('User or employee not authenticated');
    }

    const ability = await this.abilityFactory.defineAbility(user || employee);

    rules.forEach((rule) => {
      ForbiddenError.from(ability).throwUnlessCan(rule.action, rule.subject);
    });
    return true;
  }
}
