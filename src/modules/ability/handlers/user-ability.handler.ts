import { Action } from '../ability.factory';
import { UserRole } from '../../prisma/dto/user-role.enum';
import { EntityType } from 'src/common/enums/entity-type.enum';
import { PrismaService } from 'src/database/prisma.service';
import { JwtUserPayload } from 'src/modules/auth/user-auth/custom-dto';

export class UserAbilityHandler {
  static handle(
    can,
    cannot,
    userPayload: JwtUserPayload,
    prisma: PrismaService,
  ) {
    userPayload = {
      userId: userPayload.userId && BigInt(userPayload.userId),
      role: userPayload.role,
      entityType: userPayload.entityType,
    };

    switch (userPayload.role) {
      case UserRole.SUPERADMIN:
        UserAbilityHandler.defineSuperAdmin(can, cannot, userPayload);
        break;
      case UserRole.ADMIN:
        UserAbilityHandler.defineAdmin(can, cannot, userPayload);
        break;
      case UserRole.MODERATOR:
        UserAbilityHandler.defineModerator(can, cannot, userPayload);
        break;
      case UserRole.USER:
        UserAbilityHandler.defineUser(can, cannot, userPayload);
        break;
    }
  }

  private static defineSuperAdmin(can, cannot, userPayload) {
    can(Action.Manage, 'all');
  }

  private static defineAdmin(can, cannot, userPayload) {
    this.defineModerator(can, cannot, userPayload);
    can(Action.Manage, 'all');
    cannot(Action.Create, 'User');
    cannot(Action.Manage, 'User', {
      OR: [{ role: UserRole.SUPERADMIN }, { role: UserRole.ADMIN }],
    });
  }

  private static defineModerator(can, cannot, userPayload) {
    this.defineUser(can, cannot, userPayload);
    can(Action.Moderate, 'UserReport');
    can(Action.Moderate, 'Review');
    can(Action.Moderate, 'ReviewResponse');
  }

  private static defineUser(can, cannot, userPayload) {
    // WORKSHOP OWNERSHIP
    can(Action.Create, 'Address', { workshop: { ownerId: userPayload.userId } });
    can(Action.Update, 'Address', { workshop: { ownerId: userPayload.userId } });
    can(Action.Read, 'Address');
    can(Action.Delete, 'Address', { workshop: { ownerId: userPayload.userId } });

    can(Action.Create, 'WorkshopDevice', { workshop: { ownerId: userPayload.userId } });
    can(Action.Resolve, 'WorkshopDevice', { workshop: { ownerId: userPayload.userId } });
    can(Action.Read, 'WorkshopDevice', { workshop: { ownerId: userPayload.userId} });
    can(Action.Update, 'WorkshopDevice', { workshop: { ownerId: userPayload.userId } });
    can(Action.Delete, 'WorkshopDevice', { workshop: { ownerId: userPayload.userId } });

    can(Action.Read, 'Employee', { workshop: { ownerId: userPayload.userId } });
    can(Action.Create, 'Employee', { workshop: { ownerId: userPayload.userId } });
    can(Action.Update, 'Employee', { workshop: { ownerId: userPayload.userId } });

    can(Action.Update, 'EmployeePermission', { employee: {is:{ workshop: { ownerId: userPayload.userId }} } });

    can(Action.Update, 'Workshop', { ownerId: userPayload.userId });
    can(Action.Delete, 'Workshop', { ownerId: userPayload.userId });

    can(Action.Create, 'WorkshopDetails', { workshop: { ownerId: userPayload.userId } });
    can(Action.Update, 'WorkshopDetails', { workshop: { ownerId: userPayload.userId } });
    can(Action.Delete, 'WorkshopDetails', { workshop: { ownerId: userPayload.userId } });

    can(Action.Create, 'WorkshopJob', { workshop: { ownerId: userPayload.userId } });
    can(Action.Read, 'WorkshopJob', { workshop: { ownerId: userPayload.userId } });
    can(Action.Update, 'WorkshopJob', { workshop: { ownerId: userPayload.userId } });
    can(Action.Delete, 'WorkshopJob', { workshop: { ownerId: userPayload.userId } });

    // USER BASED
    cannot(Action.Create, 'User');
    can(Action.Read, 'User', { role: UserRole.USER }); //check
    can(Action.Update, 'User', { userId: userPayload.userId });
    can(Action.Delete, 'User', { userId: userPayload.userId });

    can(Action.Create, 'Workshop', { user: { userId: userPayload.userId } });
    can(Action.Read, 'Workshop')

    can(Action.Read, 'EmployeePermission')

    can(Action.Read, 'JoinWorkshopRequest', { receiverId: userPayload.userId });
    can(Action.Resolve, 'JoinWorkshopRequest', { receiverId: userPayload.userId });

    can(Action.Create, 'Review', {  userId: userPayload.userId  });
    can(Action.Read, 'Review')
    can(Action.Update, 'Review', { userId: userPayload.userId });
    can(Action.Delete, 'Review', { userId: userPayload.userId });

    can(Action.Create, 'ReviewResponse', { userId: userPayload.userId });
    can(Action.Read, 'ReviewResponse')
    can(Action.Update, 'ReviewResponse', { userId: userPayload.userId });
    can(Action.Delete, 'ReviewResponse', { userId: userPayload.userId });

    can(Action.Create, 'ServiceRequest', { userId: userPayload.userId });
    can(Action.Read, 'ServiceRequest', { userId: userPayload.userId });
    can(Action.Delete, 'ServiceRequest', { userId: userPayload.userId });

    can(Action.Read, 'SessionData', { userId: userPayload.userId });
    can(Action.Update, 'SessionData', { userId: userPayload.userId });

    can(Action.Create, 'UserReport', { userId: userPayload.userId });
    can(Action.Read, 'UserReport', { userId: userPayload.userId });

    can(Action.Create, 'Vehicle', { userId: userPayload.userId });
    can(Action.Read, 'Vehicle', { userId: userPayload.userId });
    can(Action.Update, 'Vehicle', { userId: userPayload.userId });
    can(Action.Delete, 'Vehicle', { userId: userPayload.userId });

    can(Action.Create, 'VehicleDetails', { vehicle: { userId: userPayload.userId } });
    can(Action.Read, 'VehicleDetails', { vehicle: { userId: userPayload.userId } });
    can(Action.Update, 'VehicleDetails', { vehicle: { userId: userPayload.userId } });
    can(Action.Delete, 'VehicleDetails', { vehicle: { userId: userPayload.userId } });

    can(Action.Create, 'WorkshopDetails', { workshop: { ownerId: userPayload.userId } });
    can(Action.Read, 'WorkshopDetails');
    can(Action.Update, 'WorkshopDetails', { workshop: { ownerId: userPayload.userId } });
    can(Action.Delete, 'WorkshopDetails', { workshop: { ownerId: userPayload.userId } });

    can(Action.Read, 'Customer', { userId: userPayload.userId });
    can(Action.Read, 'Employee', { userId: userPayload.userId });
    can(Action.Read, 'Job')
    can(Action.Read, 'JobCategory')
    can(Action.Read, 'VehicleBrand')
    can(Action.Read, 'VehicleModel')

    can(Action.Read, 'Service', { customer: { userId: userPayload.userId } });

    can(Action.Read, 'WorkshopJob')

  }
}
