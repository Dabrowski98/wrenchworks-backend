import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Request } from 'express'; 
import { EmployeeAuthService } from '../employee-auth.service';

@Injectable()
export class EmployeeLocalStrategy extends PassportStrategy(
  Strategy,
  'employee-local',
) {
  constructor(private readonly employeeAuthService: EmployeeAuthService) {
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
