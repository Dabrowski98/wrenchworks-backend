import { BadRequestException, ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UnauthorizedError } from 'src/common/custom-errors/errors.config';

export const CurrentEmployee = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    const employee = ctx.getContext().req?.employee;
    if (!employee) throw new UnauthorizedError('You need to be logged in');
    return employee;
  },
);