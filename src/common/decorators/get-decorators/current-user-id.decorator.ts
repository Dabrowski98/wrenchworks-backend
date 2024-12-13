import { BadRequestException, ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentUserID = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    const userId = ctx.getContext().req?.user?.userId;
    if (!userId) throw new BadRequestException('User not found - decorator');

    return userId;
  },
);