// src/modules/auth/auth-common-strategies/entity-jwt.strategy.ts
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Type } from 'src/common/decorators/guard-decorators/entity-type.decorator';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class EntityJwtStrategy extends PassportStrategy(Strategy, 'entity-jwt') {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKeyProvider: async (request, rawJwtToken, done) => {
        try {
          const decodedToken = this.jwtService.decode(rawJwtToken);
          const entityType: Type = decodedToken.entityType;
          let secret: string;
          switch (entityType) {
            case Type.USER:
              secret = process.env.USER_ACCESS_SECRET;
              break;
            case Type.EMPLOYEE:
              secret = process.env.EMPLOYEE_ACCESS_SECRET;
              break;
            default:
              throw new UnauthorizedException('Invalid entity type');
          }

          if (!secret) {
            throw new UnauthorizedException('JWT secret not found for the given entity type');
          }

          done(null, secret);
        } catch (error) {
          done(error, null);
        }
      },
    });
  }

  async validate(payload: any) {
    const entityType: Type = payload.entityType;

    let entity; 
    switch (entityType) {
        case Type.USER:
            entity = await this.prisma.user.findUnique({ where: { userId: payload.sub } });
            if (!entity) throw new UnauthorizedException('User not found');
            return { userId: entity.userId, role: entity.role, entityType };
        case Type.EMPLOYEE:
            entity = await this.prisma.employee.findUnique({ where: { employeeId: payload.sub } });
            if (!entity) throw new UnauthorizedException('Employee not found');
            return { employeeId: entity.employeeId, entityType };
            default:
        throw new UnauthorizedException('Invalid entity type');
    }
  }
}