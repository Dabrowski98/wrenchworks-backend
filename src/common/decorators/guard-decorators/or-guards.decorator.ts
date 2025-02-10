import { applyDecorators, UseGuards, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';

export function OrGuards(...guards: (Function | Function[])[]) {
  @Injectable()
  class OrAuthGuard {
    constructor(private reflector: Reflector) {}

    async canActivate(context) {
      let error = null;
      const ctx = GqlExecutionContext.create(context);
      const req = ctx.getContext().req;

      for (const guard of guards) {
        try {
          const guardInstance = new (guard as any)(this.reflector);
          const result = await guardInstance.canActivate(context);

          if (result) {
            // Copy authenticated entity from guard to request
            if (guardInstance.getAuthenticatedEntity) {
              const entity = guardInstance.getAuthenticatedEntity();
              Object.assign(req, entity);
            }
            return true;
          }
        } catch (e) {
          error = error || e;
        }
      }

      throw error;
    }
  }

  return applyDecorators(UseGuards(OrAuthGuard));
}
