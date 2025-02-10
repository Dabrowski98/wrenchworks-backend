import { Injectable } from '@nestjs/common';
import { createPrismaAbility, PrismaQuery, Subjects } from '@casl/prisma';
import { PrismaService } from 'src/database/prisma.service';
import { UserRole } from '../prisma/dto/user-role.enum';
import { WorkshopDeviceOtp } from '../workshop-device-otp/dto/workshop-device-otp.model';
import { JwtUserPayload } from '../auth/user-auth/dto';
import {
  AbilityBuilder,
  createAliasResolver,
  ExtractSubjectType,
  InferSubjects,
  PureAbility,
} from '@casl/ability';
import {
  Address,
  Customer,
  User,
  VehicleBrand,
  VehicleDetails,
  VehicleModel,
  Workshop,
  WorkshopDetails,
  WorkshopJob,
  Guest,
  Job,
  JobCategory,
  JoinWorkshopRequest,
  Review,
  ReviewResponse,
  Service,
  ServiceRequest,
  SessionData,
  Task,
  UserReport,
  WorkshopDevice,
  Employee,
  Vehicle,
} from '@prisma/client';
import { EntityType } from 'src/common/enums/entity-type.enum';
export enum Action {
  Manage = 'manage',
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
  Modify = 'modify',
}

export type AppSubjects =
  | 'all'
  | Subjects<{
      Address: Address;
      Customer: Customer;
      User: User;
      Employee: Employee;
      Guest: Guest;
      Job: Job;
      JobCategory: JobCategory;
      JoinWorkshopRequest: JoinWorkshopRequest;
      Review: Review;
      ReviewResponse: ReviewResponse;
      Service: Service;
      ServiceRequest: ServiceRequest;
      SessionData: SessionData;
      Task: Task;
      UserReport: UserReport;
      Vehicle: Vehicle;
      VehicleBrand: VehicleBrand;
      VehicleDetails: VehicleDetails;
      VehicleModel: VehicleModel;
      Workshop: Workshop;
      WorkshopDetails: WorkshopDetails;
      WorkshopDevice: WorkshopDevice;
      WorkshopJob: WorkshopJob;
    }>;

export type UserAbility = PureAbility<[Action, AppSubjects], PrismaQuery>;

@Injectable()
export class AbilityFactory {
  constructor(private readonly prisma: PrismaService) {}

  defineAbility(payload: any) {
    const { can, cannot, build } = new AbilityBuilder<UserAbility>(
      createPrismaAbility,
    );

    if (payload.entityType === EntityType.USER)
      this.handleUserPayload(can, cannot, payload);
    else if (payload.entityType === EntityType.EMPLOYEE)
      this.handleEmployeePayload(can, cannot, payload);

    cannot(Action.Read, 'User', ['password']);
    return build();
  }

  private handleUserPayload(can, cannot, userPayload) {
    userPayload = {
      userId: userPayload.userId ? BigInt(userPayload.userId) : null,
      role: userPayload.role,
      entityType: userPayload.entityType,
    };

    switch (userPayload.role) {
      case UserRole.SUPERADMIN:
        this.defineSuperAdmin(can, cannot, userPayload);
        break;

      case UserRole.ADMIN:
        this.defineAdmin(can, cannot, userPayload);
        break;

      case UserRole.MODERATOR:
        this.defineModerator(can, cannot, userPayload);
        break;

      case UserRole.USER:
        this.defineUser(can, cannot, userPayload);
        break;
    }
  }

  private handleEmployeePayload(can, cannot, employeePayload) {
    employeePayload = {
      employeeId: employeePayload.employeeId
        ? BigInt(employeePayload.employeeId)
        : null,
      role: employeePayload.role,
    };

    //TODO: IMPLEMENT EMPLOYEE ABILITIES ABAC SOMEHOW
  }

  private defineSuperAdmin(can, cannot, userPayload) {
    console.log('SUPERADMIN');
    can(Action.Manage, 'all');
  }

  private defineAdmin(can, cannot, userPayload) {
    console.log('ADMIN');
    this.defineModerator(can, cannot, userPayload);
    can(Action.Manage, 'all');
    cannot(Action.Manage, 'User', {
      OR: [{ role: UserRole.SUPERADMIN }, { role: UserRole.ADMIN }],
    });
  }

  private defineModerator(can, cannot, userPayload) {
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

  private defineUser(can, cannot, userPayload) {
    console.log('USER');
    can(Action.Manage, 'User', {
      user: { is: { userId: userPayload.userId } },
    });

    can(Action.Manage, 'Workshop', {
      workshop: { is: { ownerId: userPayload.userId } },
    });

    can(Action.Manage, 'Address', {
      user: { is: { userId: userPayload.userId } },
    });
    can(Action.Manage, 'Address', {
      workshop: { is: { ownerId: userPayload.userId } },
    });

    0;

    // can(Action.Delete, 'Address', { user: { is: { userId: userPayload.userId } } })
    // can(Action.Delete, 'Address', { workshop: { is: { ownerId: userPayload.userId } } })
  }
}
