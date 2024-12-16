import { BadRequestException, ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UnauthorizedError } from 'src/common/custom-errors/errors.config';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    const user = ctx.getContext().req?.user;
    if (!user) throw new UnauthorizedError('You need to be logged in');
    return user;
  },
);