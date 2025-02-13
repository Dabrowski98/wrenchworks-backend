import { Injectable } from '@nestjs/common';
import { createPrismaAbility, PrismaQuery, Subjects } from '@casl/prisma';
import { PrismaService } from 'src/database/prisma.service';
import { UserRole } from '../prisma/dto/user-role.enum';
import { WorkshopDeviceOtp } from '../workshop-device-otp/dto/workshop-device-otp.model';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
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
  EmployeePermission,
} from '@prisma/client';
import { EntityType } from 'src/common/enums/entity-type.enum';
import { UserAbilityHandler } from './handlers/user-ability.handler';
import { EmployeeAbilityHandler } from './handlers/employee-ability.handler';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { isEmployeePayload, isUserPayload } from 'src/common/utils/type-guards';

export enum Action {
  Manage = 'manage',
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
  Resolve = 'resolve',
  Moderate = 'moderate',
}

export type AppSubjects =
  | 'all'
  | Subjects<{
      Address: Address;
      Customer: Customer;
      User: User;
      Employee: Employee;
      EmployeePermission: EmployeePermission;
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

  async defineAbility(payload: JwtUserPayload | JwtEmployeePayload) {
    const { can, cannot, build } = new AbilityBuilder<UserAbility>(
      createPrismaAbility,
    );

    if (isUserPayload(payload))
      await UserAbilityHandler.handle(can, cannot, payload, this.prisma);
    else if (isEmployeePayload(payload))
      await EmployeeAbilityHandler.handle(can, cannot, payload, this.prisma);
    else cannot(Action.Manage, 'all');

    can(Action.Read, 'Address')
    can(Action.Read, 'Job')
    can(Action.Read, 'JobCategory')
    can(Action.Read, 'Review')
    can(Action.Read, 'ReviewResponse')
    can(Action.Read, 'User')
    can(Action.Read, 'VehicleBrand')
    can(Action.Read, 'VehicleModel')
    can(Action.Read, 'Workshop')
    can(Action.Read, 'WorkshopDetails')
    can(Action.Read, 'WorkshopJob')

    cannot(Action.Read, 'User', ['password']);
    cannot(Action.Read, 'Employee', ['password']);
    return build();
  }
}
