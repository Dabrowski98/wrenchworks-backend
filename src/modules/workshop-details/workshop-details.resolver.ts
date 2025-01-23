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

@Resolver(() => WorkshopDetails)
export class WorkshopDetailsResolver {
  constructor(
    private readonly workshopDetailsService: WorkshopDetailsService,
  ) {}

  @Mutation(() => WorkshopDetails)
  async createWorkshopDetails(
    @Args() args: CreateOneWorkshopDetailsArgs,
  ): Promise<WorkshopDetails> {
    return this.workshopDetailsService.create(args);
  }

  @Query(() => WorkshopDetails)
  async workshopDetails(
    @Args() args: FindUniqueWorkshopDetailsArgs,
  ): Promise<WorkshopDetails> {
    return this.workshopDetailsService.findOne(args);
  }

  @Query(() => [WorkshopDetails])
  async workshopDetailsList(
    @Args() args: FindManyWorkshopDetailsArgs,
  ): Promise<WorkshopDetails[]> {
    return this.workshopDetailsService.findMany(args);
  }

  @Mutation(() => WorkshopDetails)
  async updateWorkshopDetails(
    @Args() args: UpdateOneWorkshopDetailsArgs,
  ): Promise<WorkshopDetails> {
    return this.workshopDetailsService.update(args);
  }

  @Mutation(() => Boolean)
  async deleteWorkshopDetails(
    @Args() args: DeleteOneWorkshopDetailsArgs,
  ): Promise<boolean> {
    return this.workshopDetailsService.delete(args);
  }

  // RESOLVE FIELDS

  @ResolveField(() => Workshop)
  async workshop(
    @Parent() workshopDetails: WorkshopDetails,
  ): Promise<Workshop> {
    return this.workshopDetailsService.workshop(workshopDetails.workshopId);
  }
}
