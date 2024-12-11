// src/modules/auth/auth-common-guards/entity-jwt-auth.guard.ts
import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ENTITY_TYPE_KEY, Type } from 'src/common/decorators/guard-decorators/entity-type.decorator';
import { IS_PUBLIC_KEY } from 'src/common/decorators/guard-decorators/public.decorator';

@Injectable()
export class EntityJwtAuthGuard extends AuthGuard('entity-jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req; 
  }

  handleRequest(err, entity, info, context: ExecutionContext) {
    const expectedEntityType = this.reflector.getAllAndOverride<Type>(ENTITY_TYPE_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    
    
    if (err || !entity) {
      throw err || new UnauthorizedException();
    }
    
    if (isPublic) {
      return entity;
    }
    
    // Verify that the authenticated entity matches the expected type
    if (entity.entityType !== expectedEntityType) {
      throw new UnauthorizedException();
    }

    return entity;
  }
}