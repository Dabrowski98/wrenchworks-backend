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

@UseGuards(UserJwtAuthGuard, AbilitiesGuard)
@Resolver(() => JoinWorkshopRequest)
export class JoinWorkshopRequestResolver {
  constructor(
    private readonly joinWorkshopRequestService: JoinWorkshopRequestService,
  ) {}

  @CheckAbilities({ action: Action.Create, subject: 'JoinWorkshopRequest' })
  @Mutation(() => JoinWorkshopRequest)
  sendJoinWorkshopRequest(
    @Args() args: CreateOneJoinWorkshopRequestArgs,
  ): Promise<JoinWorkshopRequest> {
    return this.joinWorkshopRequestService.create(args);
  }

  @CheckAbilities({ action: Action.Update, subject: 'JoinWorkshopRequest' })
  @Mutation(() => Boolean)
  acceptJoinWorkshopRequest(
    @CurrentUserID() userId: bigint,
    @Args('joinWorkshopRequestId', { type: () => GraphQLBigInt })
    joinWorkshopRequestId: bigint,
  ): Promise<boolean> {
    return this.joinWorkshopRequestService.accept(
      joinWorkshopRequestId,
      userId,
    );
  }

  @CheckAbilities({ action: Action.Update, subject: 'JoinWorkshopRequest' })
  @Mutation(() => Boolean)
  rejectJoinWorkshopRequest(
    @CurrentUserID() userId: bigint,
    @Args('joinWorkshopRequestId', { type: () => GraphQLBigInt })
    joinWorkshopRequestId: bigint,
  ): Promise<boolean> {
    return this.joinWorkshopRequestService.reject(
      joinWorkshopRequestId,
      userId,
    );
  }

  @CheckAbilities({ action: Action.Read, subject: 'JoinWorkshopRequest' })
  @Query(() => JoinWorkshopRequest)
  joinWorkshopRequest(
    @Args('joinWorkshopRequestId', { type: () => GraphQLBigInt })
    joinWorkshopRequestId: bigint,
  ): Promise<JoinWorkshopRequest> {
    return this.joinWorkshopRequestService.findOne({
      where: { joinWorkshopRequestId },
    });
  }

  @CheckAbilities({ action: Action.Read, subject: 'JoinWorkshopRequest' })
  @Query(() => [JoinWorkshopRequest])
  joinWorkshopRequests(
    @Args() args: FindManyJoinWorkshopRequestArgs,
  ): Promise<JoinWorkshopRequest[]> {
    return this.joinWorkshopRequestService.findMany(args);
  }

  @CheckAbilities({ action: Action.Update, subject: 'JoinWorkshopRequest' })
  @Mutation(() => JoinWorkshopRequest)
  updateJoinWorkshopRequest(
    @Args() args: UpdateOneJoinWorkshopRequestArgs,
  ): Promise<JoinWorkshopRequest> {
    return this.joinWorkshopRequestService.update(args);
  }

  @CheckAbilities({ action: Action.Delete, subject: 'JoinWorkshopRequest' })
  @Mutation(() => Boolean)
  deleteJoinWorkshopRequest(
    @Args() args: DeleteOneJoinWorkshopRequestArgs,
  ): Promise<boolean> {
    return this.joinWorkshopRequestService.delete(args);
  }

  // RESOLVE FIELDS

  @CheckAbilities({ action: Action.Read, subject: 'Employee' })
  @ResolveField(() => Employee, { nullable: true })
  employee(
    @Parent() joinWorkshopRequest: JoinWorkshopRequest,
  ): Promise<Employee | null> {
    return this.joinWorkshopRequestService.employee(
      joinWorkshopRequest.joinWorkshopRequestId,
    );
  }

  @CheckAbilities({ action: Action.Read, subject: 'Workshop' })
  @ResolveField(() => Workshop, { nullable: true })
  workshop(
    @Parent() joinWorkshopRequest: JoinWorkshopRequest,
  ): Promise<Workshop | null> {
    return this.joinWorkshopRequestService.workshop(
      joinWorkshopRequest.joinWorkshopRequestId,
    );
  }

  @CheckAbilities({ action: Action.Read, subject: 'User' })
  @ResolveField(() => User, { nullable: true })
  user(
    @Parent() joinWorkshopRequest: JoinWorkshopRequest,
  ): Promise<User | null> {
    return this.joinWorkshopRequestService.user(
      joinWorkshopRequest.joinWorkshopRequestId,
    );
  }
}
