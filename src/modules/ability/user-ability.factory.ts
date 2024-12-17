import { Injectable } from '@nestjs/common';
import { createPrismaAbility, PrismaQuery } from '@casl/prisma';
import { PrismaService } from 'src/database/prisma.service';
import { UserRole } from '../prisma/dto/user-role.enum';
import { User } from '../user/dto';
import { Employee } from '../employee/dto';
import { WorkshopDevice } from '../workshop-device';
import { WorkshopDeviceOTP } from '../workshop-device-otp';
import { JwtUserPayload } from '../auth/user-auth/dto';
import {
  AbilityBuilder,
  createAliasResolver,
  ExtractSubjectType,
  InferSubjects,
  PureAbility,
} from '@casl/ability';

export enum Action {
  Manage = 'manage',
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
  Modify = 'modify',
}

const ResolveAction = createAliasResolver({
  Modify: [Action.Update, Action.Delete],
});

export type UserAuthSubjects = InferSubjects<
  typeof User | typeof Employee | WorkshopDevice | WorkshopDeviceOTP | 'all'
>;

export type UserAuthAbility = PureAbility<
  [Action, UserAuthSubjects],
  PrismaQuery
>;

@Injectable()
export class UserAbilityFactory {
  constructor(private readonly prisma: PrismaService) {}

  defineAbility(user: JwtUserPayload) {
    const { can, cannot, build } = new AbilityBuilder<UserAuthAbility>(
      createPrismaAbility,
    );

    switch (user.role) {
      case UserRole.SUPERADMIN:
        can(Action.Manage, 'all');
        break;

      case UserRole.ADMIN: //can manage all apart from his own services etc.
        can(Action.Manage, 'all');
        cannot(Action.Manage, User, { role: UserRole.SUPERADMIN });
        cannot(Action.Manage, User, { role: UserRole.ADMIN });

        break;

      case UserRole.MODERATOR: //can manage user reports, reviews, comments, etc.
        can(Action.Read, 'all');
        cannot(Action.Manage, User, { role: UserRole.SUPERADMIN });
        cannot(Action.Manage, User, { role: UserRole.ADMIN });
        cannot(Action.Manage, User, { role: UserRole.MODERATOR });
        break;

      case UserRole.USER:
        can(Action.Modify, User);

        // can(Action.Update, User, { userId: user.sub, role: UserRole.USER });
        break;

      default:
        cannot(Action.Manage, 'all');
        break;
    }

    cannot(Action.Read, User, ['password']);

    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<UserAuthSubjects>,
    });
  }
}
//export type BusinessAbility = PureAbility<[Action, BusinessSubjects]>;

// export type AuthSubjects = InferSubjects<
//   | typeof User
//   | typeof WorkshopDevice
//   | typeof WorkshopDeviceOTP
//   | 'all'
// >;

// export type BusinessSubjects = InferSubjects<
//   | typeof Address
//   | typeof Customer
//   | typeof Employee
//   | typeof Guest
//   | typeof Job
//   | typeof JobCategory
//   | typeof JoinWorkshopRequest
//   | typeof Review
//   | typeof ReviewResponse
//   | typeof Service
//   | typeof ServiceRequest
//   | typeof SessionData
//   | typeof Task
//   | typeof User
//   | typeof UserReport
//   | typeof Vehicle
//   | typeof VehicleBrand
//   | typeof VehicleDetails
//   | typeof VehicleModel
//   | typeof Workshop
//   | typeof WorkshopDetails
//   | typeof WorkshopDevice
//   | typeof WorkshopJob
//   | 'all'
// >;
