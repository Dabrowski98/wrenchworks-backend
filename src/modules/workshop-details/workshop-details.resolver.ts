import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { WorkshopDetailsService } from './workshop-details.service';
import { WorkshopDetails } from './dto';
import {
  CreateOneWorkshopDetailsArgs,
  DeleteOneWorkshopDetailsArgs,
  FindManyWorkshopDetailsArgs,
  FindUniqueWorkshopDetailsArgs,
  UpdateOneWorkshopDetailsArgs,
} from './dto';
import { Workshop } from '../workshop/dto';
import { Action } from '../ability';
import { CheckAbilities } from '../ability';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { CurrentUser } from 'src/common/decorators/jwt-decorators/current-user.decorator';
import { Public } from 'src/common/decorators/guard-decorators/public.decorator';
import { OrGuards } from 'src/common/decorators/guard-decorators/or-guards.decorator';
import { UserJwtAuthGuard } from '../auth/user-auth/guards/user-jwt-auth.guard';
import { EmployeeJwtAuthGuard } from '../auth/employee-auth/guards/employee-jwt-auth.guard';
import { CurrentEntity } from 'src/common/decorators/jwt-decorators/current-entity.decorator';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { PureAbility } from '@casl/ability';
import { CurrentAbility } from 'src/common/decorators/jwt-decorators/current-ability.decorator';

@Resolver(() => WorkshopDetails)
export class WorkshopDetailsResolver {
  constructor(
    private readonly workshopDetailsService: WorkshopDetailsService,
  ) {}

  // ADMIN, USER(Owner)
  @CheckAbilities({ action: Action.Create, subject: 'WorkshopDetails' })
  @OrGuards(UserJwtAuthGuard)
  @Mutation(() => WorkshopDetails)
  async createWorkshopDetails(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args() args: CreateOneWorkshopDetailsArgs,
  ): Promise<WorkshopDetails> {
    return this.workshopDetailsService.create(currentUser, args);
  }

  // PUBLIC
  @Public()
  @CheckAbilities({ action: Action.Read, subject: 'WorkshopDetails' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => WorkshopDetails)
  async workshopDetails(
    @Args() args: FindUniqueWorkshopDetailsArgs,
  ): Promise<WorkshopDetails> {
    return this.workshopDetailsService.findOne(args);
  }

  // PUBLIC
  @Public()
  @CheckAbilities({ action: Action.Read, subject: 'WorkshopDetails' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => [WorkshopDetails])
  async workshopDetailsList(
    @Args() args: FindManyWorkshopDetailsArgs,
  ): Promise<WorkshopDetails[]> {
    return this.workshopDetailsService.findMany(args);
  }

  // ADMIN, USER(Owner), EMPLOYEE
  @CheckAbilities({ action: Action.Update, subject: 'WorkshopDetails' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => WorkshopDetails)
  async updateWorkshopDetails(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: UpdateOneWorkshopDetailsArgs,
  ): Promise<WorkshopDetails> {
    return this.workshopDetailsService.update(currentEntity, args);
  }

  // ADMIN, USER(Owner)
  @CheckAbilities({ action: Action.Delete, subject: 'WorkshopDetails' })
  @OrGuards(UserJwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteWorkshopDetails(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args() args: DeleteOneWorkshopDetailsArgs,
  ): Promise<boolean> {
    return this.workshopDetailsService.delete(currentUser, args);
  }

  // RESOLVE FIELDS

  @ResolveField(() => Workshop)
  async workshop(
    @CurrentAbility() ability: PureAbility,
    @Parent() workshopDetails: WorkshopDetails,
  ): Promise<Workshop | null> {
    return this.workshopDetailsService.workshop(
      ability,
      workshopDetails.workshopId,
    );
  }
}
