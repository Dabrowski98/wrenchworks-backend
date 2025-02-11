import { applyDecorators, UseGuards, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';

interface AuthenticatedEntities {
  user?: any;
  employee?: any;
}

export function OrGuards(...guards: (Function | Function[])[]) {
  @Injectable()
  class OrAuthGuard {
    constructor(private reflector: Reflector) {}

    async canActivate(context) {
      let error = null;
      const ctx = GqlExecutionContext.create(context);
      const req = ctx.getContext().req;

      const authenticatedEntities: AuthenticatedEntities = {};

      for (const guardClass of guards) {
        try {
          const guardClasses = Array.isArray(guardClass)
            ? guardClass
            : [guardClass];

          for (const guard of guardClasses) {
            const guardInstance = new (guard as any)(this.reflector);
            const result = await guardInstance.canActivate(context);

            if (result) {
              if (guardInstance.handleRequest) {
                let entity;
                if (guard.name === 'UserJwtAuthGuard') {
                  entity = await guardInstance.handleRequest(
                    null,
                    req.user,
                    null,
                    context,
                  );
                  if (entity) authenticatedEntities.user = entity;
                } else if (guard.name === 'EmployeeJwtAuthGuard') {
                  entity = await guardInstance.handleRequest(
                    null,
                    req.employee,
                    null,
                    context,
                  );
                  if (entity) authenticatedEntities.employee = entity;
                }
              }
            }
          }
        } catch (e) {
          error = error || e;
        }
      }


      if (Object.keys(authenticatedEntities).length > 0) {
        req.user = authenticatedEntities.user || null;
        req.employee = authenticatedEntities.employee || null;
        return true;
      }

      if (error) {
        throw error;
      }

      const isPublic = this.reflector.getAllAndOverride('isPublic', [
        context.getHandler(),
        context.getClass(),
      ]);

      return isPublic;
    }
  }

  return applyDecorators(UseGuards(OrAuthGuard));
}
