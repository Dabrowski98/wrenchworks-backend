// src/modules/auth/auth-common-strategies/entity-jwt.strategy.ts
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common'; 
import { EntityType } from 'src/common/enums/entity-type.enum';
@Injectable()
export class UserJwtStrategy extends PassportStrategy(Strategy, 'user-jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.USER_ACCESS_SECRET,
    });
  }

  async validate(payload: any) {
    return {
      userId: payload.sub,
      role: payload.role,
      entityType: EntityType.USER,
    };
  }
}
