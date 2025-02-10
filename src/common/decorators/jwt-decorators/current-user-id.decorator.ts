import { BadRequestException, ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UnauthorizedError } from 'src/common/custom-errors/errors.config';

export const CurrentUserID = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    const userId = ctx.getContext().req?.user?.userId;
    return userId || null;
  },
);
