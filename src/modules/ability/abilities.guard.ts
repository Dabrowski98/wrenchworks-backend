import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import {
  CHECK_ABILITY,
  RequiredRole as RequiredRule,
} from './abilities.decorator';
import { ForbiddenError } from '@casl/ability';
import { Observable } from 'rxjs';
import { UserAbilityFactory } from './user-ability.factory';
import { GqlExecutionContext } from '@nestjs/graphql';
import { IS_PUBLIC_KEY } from 'src/common/decorators/guard-decorators/public.decorator';

@Injectable()
export class AbilitiesGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly userAbilityFactory: UserAbilityFactory,
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
    const user = ctx.getContext().req.user;
    console.log(user);

    const ability = await this.userAbilityFactory.defineAbility(user);
    rules.forEach((rule) => {
        ForbiddenError.from(ability).throwUnlessCan(rule.action, rule.subject);
    });
    return true;
  }
}
