import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import {
  CreateOneJoinWorkshopRequestArgs,
  DeleteOneJoinWorkshopRequestArgs,
  DeleteManyJoinWorkshopRequestArgs,
  FindManyJoinWorkshopRequestArgs,
  FindUniqueJoinWorkshopRequestArgs,
  UpdateOneJoinWorkshopRequestArgs,
  JoinWorkshopRequest,
} from './dto';
import { UseGuards } from '@nestjs/common';
import { Employee } from '../employee/dto/employee.model';
import { Workshop } from '../workshop/dto/workshop.model';
import { User } from '../user/dto/user.model';
import { CurrentUserID } from 'src/common/decorators/jwt-decorators/current-user-id.decorator';
import { JoinWorkshopRequestService } from './join-workshop-request.service';
import { Action, CheckAbilities } from '../ability';
import { AbilitiesGuard } from '../ability/abilities.guard';
import { UserJwtAuthGuard } from '../auth/user-auth/guards';
import { OrGuards } from 'src/common/decorators/guard-decorators/or-guards.decorator';
import { EmployeeJwtAuthGuard } from '../auth/employee-auth/guards/employee-jwt-auth.guard';
import { CurrentEntity } from 'src/common/decorators/jwt-decorators/current-entity.decorator';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { CurrentUser } from 'src/common/decorators/jwt-decorators/current-user.decorator';
import { CurrentAbility } from 'src/common/decorators/jwt-decorators/current-ability.decorator';
import { PureAbility } from '@casl/ability';

@Resolver(() => JoinWorkshopRequest)
export class JoinWorkshopRequestResolver {
  constructor(
    private readonly joinWorkshopRequestService: JoinWorkshopRequestService,
  ) {}

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Create, subject: 'JoinWorkshopRequest' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => JoinWorkshopRequest)
  sendJoinWorkshopRequest(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args() args: CreateOneJoinWorkshopRequestArgs,
  ): Promise<JoinWorkshopRequest> {
    return this.joinWorkshopRequestService.create(currentEntity, args);
  }

  // ADMIN, EMPLOYEES, USER THAT RECEIVED THE REQUEST
  @CheckAbilities({ action: Action.Read, subject: 'JoinWorkshopRequest' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => JoinWorkshopRequest)
  joinWorkshopRequest(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args() args: FindUniqueJoinWorkshopRequestArgs,
  ): Promise<JoinWorkshopRequest> {
    return this.joinWorkshopRequestService.findOne(currentEntity, args);
  }

  // ADMIN, EMPLOYEE, USER THAT RECEIVED THE REQUESTS
  @CheckAbilities({ action: Action.Read, subject: 'JoinWorkshopRequest' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => [JoinWorkshopRequest])
  joinWorkshopRequests(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args() args?: FindManyJoinWorkshopRequestArgs,
  ): Promise<JoinWorkshopRequest[]> {
    return this.joinWorkshopRequestService.findMany(currentEntity, args);
  }

  // USER
  @CheckAbilities({ action: Action.Resolve, subject: 'JoinWorkshopRequest' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => Boolean)
  acceptJoinWorkshopRequest(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args('joinWorkshopRequestId', { type: () => GraphQLBigInt })
    joinWorkshopRequestId: bigint,
  ): Promise<boolean> {
    return this.joinWorkshopRequestService.accept(
      currentUser,
      joinWorkshopRequestId,
    );
  }

  // USER
  @CheckAbilities({ action: Action.Resolve, subject: 'JoinWorkshopRequest' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => Boolean)
  rejectJoinWorkshopRequest(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args('joinWorkshopRequestId', { type: () => GraphQLBigInt })
    joinWorkshopRequestId: bigint,
  ): Promise<boolean> {
    return this.joinWorkshopRequestService.reject(
      currentUser,
      joinWorkshopRequestId,
    );
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Update, subject: 'JoinWorkshopRequest' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => JoinWorkshopRequest)
  updateJoinWorkshopRequest(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args() args: UpdateOneJoinWorkshopRequestArgs,
  ): Promise<JoinWorkshopRequest> {
    return this.joinWorkshopRequestService.update(currentEntity, args);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Delete, subject: 'JoinWorkshopRequest' })
  @Mutation(() => Boolean)
  deleteJoinWorkshopRequest(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args() args: DeleteOneJoinWorkshopRequestArgs,
  ): Promise<boolean> {
    return this.joinWorkshopRequestService.delete(currentEntity, args);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Delete, subject: 'JoinWorkshopRequest' })
  @Mutation(() => Boolean)
  deleteManyJoinWorkshopRequest(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args() args: DeleteManyJoinWorkshopRequestArgs,
  ): Promise<boolean> {
    return this.joinWorkshopRequestService.deleteMany(currentEntity, args);
  }

  // RESOLVE FIELDS 
  @ResolveField(() => Employee, { nullable: true })
  employee(
    @CurrentAbility() ability: PureAbility,
    @Parent() joinWorkshopRequest: JoinWorkshopRequest,
  ): Promise<Employee | null> {
    return this.joinWorkshopRequestService.employee(
      ability,
      joinWorkshopRequest.joinWorkshopRequestId,
    );
  }
 
  @ResolveField(() => Workshop, { nullable: true })
  workshop(
    @CurrentAbility() ability: PureAbility,
    @Parent() joinWorkshopRequest: JoinWorkshopRequest,
  ): Promise<Workshop | null> {
    return this.joinWorkshopRequestService.workshop(
      ability,
      joinWorkshopRequest.joinWorkshopRequestId,
    );
  }
 
  @ResolveField(() => User, { nullable: true })
  user(
    @CurrentAbility() ability: PureAbility,
    @Parent() joinWorkshopRequest: JoinWorkshopRequest,
  ): Promise<User | null> {
    return this.joinWorkshopRequestService.user(
      ability,
      joinWorkshopRequest.joinWorkshopRequestId,
    );
  }
}
