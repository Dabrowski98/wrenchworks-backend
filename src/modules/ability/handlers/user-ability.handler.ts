import { Action } from '../ability.factory';
import { UserRole } from '../../prisma/dto/user-role.enum';
import { EntityType } from 'src/common/enums/entity-type.enum';
import { PrismaService } from 'src/database/prisma.service';
import { JwtUserPayload } from 'src/modules/auth/user-auth/custom-dto';

export class UserAbilityHandler {
  static handle(can, cannot, userPayload: JwtUserPayload, prisma: PrismaService) {
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
    console.log('SUPERADMIN');
    can(Action.Manage, 'all');
  }

  private static defineAdmin(can, cannot, userPayload) {
    console.log('ADMIN');
    this.defineModerator(can, cannot, userPayload);
    can(Action.Manage, 'all');
    cannot(Action.Manage, 'User', {
      OR: [{ role: UserRole.SUPERADMIN }, { role: UserRole.ADMIN }],
    });
  }

  private static defineModerator(can, cannot, userPayload) {
    console.log('MODERATOR');
    this.defineUser(can, cannot, userPayload);
    cannot(Action.Manage, 'User', {
      OR: [
        { role: UserRole.SUPERADMIN },
        { role: UserRole.ADMIN },
        { role: UserRole.MODERATOR },
      ],
    });
    can(Action.Manage, 'UserReport');
    can(Action.Manage, 'Review');
    can(Action.Manage, 'ReviewResponse');
  }

  private static defineUser(can, cannot, userPayload) {
    // USER can MANAGE his own USER
    can(Action.Manage, 'User', {
      user: { is: { userId: userPayload.userId } },
    });

    // OWNER can MANAGE his own WORKSHOP
    can(Action.Manage, 'Workshop', {
      workshop: { is: { ownerId: userPayload.userId } },
    });

    // USER can MANAGE his own ADDRESS
    can(Action.Manage, 'Address', {
      user: { is: { userId: userPayload.userId } },
    });

    // OWNER can MANAGE ADDRESS of his own WORKSHOP
    can(Action.Manage, 'Address', {
      workshop: { is: { ownerId: userPayload.userId } },
    });



  }
}
