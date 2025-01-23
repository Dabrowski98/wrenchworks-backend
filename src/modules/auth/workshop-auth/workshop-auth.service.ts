import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/database/prisma.service';
import { EmployeeService } from 'src/modules/employee/employee.service';
import { WorkshopService } from 'src/modules/workshop/workshop.service';
import { RegisterWorkshopResponse } from './dto/register-workshop.response';
import { RegisterWorkshopInput } from './dto/register-workshop.input';
import { UserService } from 'src/modules/user/user.service';
@Injectable()
export class WorkshopAuthService {
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly userService: UserService,
    private readonly workshopService: WorkshopService,
    private readonly prisma: PrismaService,
  ) {}

  async registerWorkshop(
    input: RegisterWorkshopInput,
    userId: bigint,
  ): Promise<RegisterWorkshopResponse> {
    const userWorkshops = await this.userService.workshops(userId);

    if (userWorkshops.length >= Number(process.env.USER_MAX_WORKSHOPS))
      throw new BadRequestException(
        'User has reached the maximum number of workshops he can have',
      );
    const { ownerEmployee: ownerEmployeeInput, ...workshopInput } = input;

    const workshopHashedPassword = await bcrypt.hash(
      input.password,
      Number(process.env.SALT_ROUNDS),
    );

    const employeeHashedPassword = await bcrypt.hash(
      ownerEmployeeInput.password,
      Number(process.env.SALT_ROUNDS),
    );

    const workshop = await this.workshopService.create({
      ...workshopInput,
      password: workshopHashedPassword,
      user: { connect: { userId } },
    });

    //TODO: set all permissions to true
    const ownerEmployee = await this.employeeService.create({
      data: {
        ...ownerEmployeeInput,
        password: employeeHashedPassword,
        workshop: { connect: { workshopId: workshop.workshopId } },
      },
    });

    const updatedOwnerEmployee = await this.prisma.employee.update({
      where: { employeeId: ownerEmployee.employeeId },
      data: { userId },
    });

    return { workshop, ownerEmployee: updatedOwnerEmployee };
  }
}
