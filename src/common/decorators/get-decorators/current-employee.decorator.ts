import { BadRequestException, ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentEmployee = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    const employee = ctx.getContext().req?.employee;

    if (!employee) throw new BadRequestException('Employee not found');

    return employee;
  },
);