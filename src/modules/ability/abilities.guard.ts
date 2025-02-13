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
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;
    const user = req.user;
    const employee = req.employee;

    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if ((!user && !employee) && !isPublic) {
      return false;
    }

    // Create ability once and store in context
    const ability = await this.abilityFactory.defineAbility(user || employee);
    ctx.getContext().ability = ability; // Store ability in existing context

    console.log('ABILITY CALL');
    const rules = this.reflector.getAllAndOverride<RequiredRule[]>(
      CHECK_ABILITY,
      [context.getHandler(), context.getClass()],
    );


    if (!rules || isPublic) {
      return true;
    }

    for (const rule of rules) {
      await ForbiddenError.from(ability).throwUnlessCan(
        rule.action,
        rule.subject,
      );
    }
    return true;
  }
}
