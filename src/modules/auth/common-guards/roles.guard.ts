
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UnauthorizedError } from 'src/common/custom-errors/errors.config';
import { ROLES_KEY } from 'src/common/decorators/guard-decorators/roles.decorator';
import { UserRole } from 'src/modules/prisma';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  private roleHierarchy = {
    [UserRole.SUPERADMIN]: 4,
    [UserRole.ADMIN]: 3,
    [UserRole.MODERATOR]: 2,
    [UserRole.USER]: 1,
  };

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }

  canActivate(context: ExecutionContext): boolean {
    const requiredRole = this.reflector.getAllAndOverride<UserRole>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredRole) {
      return true;
    } 

    const { user } = this.getRequest(context);
    if (!user) throw new UnauthorizedError('User not found');
    
    const userRoleValue = this.roleHierarchy[user.role];
    const requiredRoleValue = this.roleHierarchy[requiredRole];

    return userRoleValue >= requiredRoleValue;
  }
}
