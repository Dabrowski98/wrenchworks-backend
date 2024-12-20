import { BadRequestException, ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentEmployeeID = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    const employeeId = ctx.getContext().req?.employee?.employeeId;
    if (!employeeId) throw new BadRequestException('You need to be logged in');
    return employeeId;
  },
);