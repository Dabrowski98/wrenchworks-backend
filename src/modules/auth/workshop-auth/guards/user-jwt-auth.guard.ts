// src/modules/auth/auth-common-guards/entity-jwt-auth.guard.ts
import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';
import { IS_PUBLIC_KEY } from 'src/common/decorators/guard-decorators/public.decorator';

@Injectable()
export class EmployeeJwtAuthGuard extends AuthGuard('employee-jwt') {
  constructor(private reflector: Reflector) {
    super({ property: 'employee' });
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }

  handleRequest(err, employee, info, context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;

    if (err) {
      throw err;
    }
    if (isPublic) {
      return employee;
    }

    return employee;
  }
}
