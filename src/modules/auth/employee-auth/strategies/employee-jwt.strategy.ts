// src/modules/auth/auth-common-strategies/entity-jwt.strategy.ts
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { EntityType } from 'src/common/enums/entity-type.enum';

@Injectable()
export class EmployeeJwtStrategy extends PassportStrategy(
  Strategy,
  'employee-jwt',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.EMPLOYEE_ACCESS_SECRET,
    });
  }

  async validate(payload: any) {
    return {
      employeeId: payload.employeeId,
      entityType: EntityType.EMPLOYEE,
      workshopId: payload.workshopId,
      loggedInBy: payload.loggedInBy,
    };
  }
}
