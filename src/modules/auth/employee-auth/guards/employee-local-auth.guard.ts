import { CanActivate, Injectable } from '@nestjs/common';
import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class EmployeeLocalAuthGuard extends AuthGuard('employee-local') {
  constructor() {
    super({property: 'employee'});
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext();
    request.body = ctx.getArgs().loginEmployeeInput;
    return request;
  }
}
