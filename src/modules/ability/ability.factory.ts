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
  EmployeePermission,
} from '@prisma/client';
import { EntityType } from 'src/common/enums/entity-type.enum';
import { UserAbilityHandler } from './handlers/user-ability.handler';
import { EmployeeAbilityHandler } from './handlers/employee-ability.handler';
import { JwtEmployeePayload } from '../auth/employee-auth/dto';

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

//EMPLOYEE PERMISSION MANAGE means CREATE, READ, UPDATE, DELETE
//EMPLOYEE PERMISSION UPDATE means Assign/Remove permissions to/from employee

//REVIEW CREATE conditional compare userId's
//REVIEW RESPONSE SAME


export type UserAbility = PureAbility<[Action, AppSubjects], PrismaQuery>;

@Injectable()
export class AbilityFactory {
  constructor(private readonly prisma: PrismaService) {}

  defineAbility(payload: JwtUserPayload | JwtEmployeePayload) {
    const { can, cannot, build } = new AbilityBuilder<UserAbility>(
      createPrismaAbility,
    );

    if (payload.entityType === EntityType.USER)
      UserAbilityHandler.handle(can, cannot, payload as JwtUserPayload);
    else if (payload.entityType === EntityType.EMPLOYEE)
      EmployeeAbilityHandler.handle(can, cannot, payload as JwtEmployeePayload);
    else cannot(Action.Manage, 'all');

    cannot(Action.Read, 'User', ['password']);
    cannot(Action.Read, 'Employee', ['password']);
    return build();
  }
}
