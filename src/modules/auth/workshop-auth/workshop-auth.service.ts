import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/database/prisma.service';
import { EmployeeService } from 'src/modules/employee/employee.service';
import { WorkshopService } from 'src/modules/workshop/workshop.service';
import { RegisterWorkshopResponse } from './dto/register-workshop.response';
import { RegisterWorkshopInput } from './dto/register-workshop.input';
import { UserService } from 'src/modules/user/user.service';
import { BadRequestError } from 'src/common/custom-errors/errors.config';
import { JwtUserPayload } from '../user-auth/dto/jwt-user-payload';
@Injectable()
export class WorkshopAuthService {
  constructor(
    private readonly userService: UserService,
    private readonly workshopService: WorkshopService,
    private readonly prisma: PrismaService,
  ) {}

  async registerWorkshop(
    currentUser: JwtUserPayload,
    input: RegisterWorkshopInput,
  ): Promise<RegisterWorkshopResponse> {
    if (!currentUser) throw new BadRequestError('User not found');
    const userWorkshops = await this.userService.workshops(currentUser.userId);

    if (userWorkshops.length >= Number(process.env.USER_MAX_WORKSHOPS))
      throw new BadRequestException(
        'User has reached the maximum number of workshops he can have',
      );

    const { ownerEmployee: ownerEmployeeInput, ...workshopInput } = input;

    const employeeHashedPassword = await bcrypt.hash(
      ownerEmployeeInput.password,
      Number(process.env.SALT_ROUNDS),
    );

    const workshop = await this.workshopService.create({
      data: {
        ...workshopInput,
        user: { connect: { userId: currentUser.userId } },
      },
    });

    const allPermissions = await this.prisma.employeePermission.findMany();

    const ownerEmployee = await this.prisma.employee.create({
      data: {
        ...ownerEmployeeInput,
        password: employeeHashedPassword,
        workshop: { connect: { workshopId: workshop.workshopId } },
        permissions: {
          connect: allPermissions.map((permission) => ({
            permissionId: permission.permissionId,
          })),
        },
        user: { connect: { userId: currentUser.userId } },
      },
    });

    return { workshop, ownerEmployee };
  }
}
