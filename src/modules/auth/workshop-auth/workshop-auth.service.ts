import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/database/prisma.service';
import { EmployeeService } from 'src/modules/employee/employee.service';
import { WorkshopService } from 'src/modules/workshop/workshop.service';
import { UserService } from 'src/modules/user/user.service';
import { BadRequestError } from 'src/common/custom-errors/errors.config';
import { JwtUserPayload } from '../user-auth/custom-dto/jwt-user-payload';
import { CreateOneWorkshopArgs, Workshop } from 'src/modules/workshop/dto';
import { AbilityFactory } from 'src/modules/ability/ability.factory';
import { ForbiddenError, subject } from '@casl/ability';
import { Action } from 'src/modules/ability/ability.factory';
import { RegisterWorkshopResponse } from './custom-dto';
import { RegisterWorkshopArgs } from './custom-dto/register-workshop.args';
@Injectable()
export class WorkshopAuthService {
  constructor(
    private readonly userService: UserService,
    private readonly workshopService: WorkshopService,
    private readonly prisma: PrismaService,
    private readonly userAbilityFactory: AbilityFactory,
  ) {}

  async registerWorkshop(
    currentUser: JwtUserPayload,
    args: RegisterWorkshopArgs,
  ): Promise<RegisterWorkshopResponse> {
    if (!currentUser) throw new BadRequestError('User not found');
    const { data } = args;
    const user = await this.prisma.user.findUnique({
      where: { userId: data.workshop.user.connect.userId },
      include: {
        workshops: true,
      },
    });
    const ability = this.userAbilityFactory.defineAbility(currentUser);
    ForbiddenError.from(ability).throwUnlessCan(
      Action.Create,
      subject('Workshop', { user } as any as Workshop),
    );

    const userWorkshops = user.workshops;

    if (userWorkshops.length >= Number(process.env.USER_MAX_WORKSHOPS))
      throw new BadRequestException(
        'User has reached the maximum number of workshops he can have',
      );

    const employeeHashedPassword = await bcrypt.hash(
      data.ownerEmployee.password,
      Number(process.env.SALT_ROUNDS),
    );

    const workshop = await this.workshopService.create({
      data: {
        ...data.workshop,
        user: { connect: { userId: currentUser.userId } },
      },
    });

    const allPermissions = await this.prisma.employeePermission.findMany();

    const ownerEmployee = await this.prisma.employee.create({
      data: {
        ...data.ownerEmployee,
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
