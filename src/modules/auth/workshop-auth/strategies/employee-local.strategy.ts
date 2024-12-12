import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserAuthService } from '../../user-auth/user-auth.service';
import { WorkshopAuthService } from '../workshop-auth.service';
import { Request } from 'express';

@Injectable()
export class EmployeeLocalStrategy extends PassportStrategy(
  Strategy,
  'employee-local',
) {
  constructor(private readonly employeeAuthService: WorkshopAuthService) {
    super({
      usernameField: 'login',
      passwordField: 'password',
      passReqToCallback: true,
    });
  }

  async validate(req: Request, login: string, password: string): Promise<any> {
    const reqBody = req.body;
    const workshopId = reqBody.workshopId;
    const employee = await this.employeeAuthService.validateEmployee(
      login,
      password,
      workshopId,
    );
    if (!employee) throw new UnauthorizedException('Invalid credentials');
    return employee;
  }
}
