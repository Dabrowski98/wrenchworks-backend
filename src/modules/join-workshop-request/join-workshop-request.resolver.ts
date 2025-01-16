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

@Resolver(() => JoinWorkshopRequest)
export class JoinWorkshopRequestResolver {
  constructor(
    private readonly joinWorkshopRequestService: JoinWorkshopRequestService,
  ) {}

  @Mutation(() => JoinWorkshopRequest)
  sendJoinWorkshopRequest(
    @Args() args: CreateOneJoinWorkshopRequestArgs,
  ): Promise<JoinWorkshopRequest> {
    return this.joinWorkshopRequestService.create(args);
  }

  //@UseGuards(UserJwtAuthGuard)
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

  //@UseGuards(UserJwtAuthGuard)
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

  @Query(() => JoinWorkshopRequest)
  joinWorkshopRequest(
    @Args('joinWorkshopRequestId', { type: () => GraphQLBigInt })
    joinWorkshopRequestId: bigint,
  ): Promise<JoinWorkshopRequest> {
    return this.joinWorkshopRequestService.findOne({
      where: { joinWorkshopRequestId },
    });
  }

  @Query(() => [JoinWorkshopRequest])
  joinWorkshopRequests(
    @Args() args: FindManyJoinWorkshopRequestArgs,
  ): Promise<JoinWorkshopRequest[]> {
    return this.joinWorkshopRequestService.findMany(args);
  }

  @Mutation(() => JoinWorkshopRequest)
  updateJoinWorkshopRequest(
    @Args() args: UpdateOneJoinWorkshopRequestArgs,
  ): Promise<JoinWorkshopRequest> {
    return this.joinWorkshopRequestService.update(args);
  }

  @Mutation(() => Boolean)
  deleteJoinWorkshopRequest(
    @Args() args: DeleteOneJoinWorkshopRequestArgs,
  ): Promise<boolean> {
    return this.joinWorkshopRequestService.delete(args);
  }

  // RESOLVE FIELDS

  @ResolveField(() => Employee, { nullable: true })
  employee(
    @Parent() joinWorkshopRequest: JoinWorkshopRequest,
  ): Promise<Employee | null> {
    return this.joinWorkshopRequestService.employee(
      joinWorkshopRequest.joinWorkshopRequestId,
    );
  }

  @ResolveField(() => Workshop, { nullable: true })
  workshop(
    @Parent() joinWorkshopRequest: JoinWorkshopRequest,
  ): Promise<Workshop | null> {
    return this.joinWorkshopRequestService.workshop(
      joinWorkshopRequest.joinWorkshopRequestId,
    );
  }

  @ResolveField(() => User, { nullable: true })
  user(
    @Parent() joinWorkshopRequest: JoinWorkshopRequest,
  ): Promise<User | null> {
    return this.joinWorkshopRequestService.user(
      joinWorkshopRequest.joinWorkshopRequestId,
    );
  }
}
