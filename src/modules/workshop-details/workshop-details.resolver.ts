import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { WorkshopDetails } from '../workshop-details/entities/workshop-detail.entity';
import { WorkshopDetailsService } from './workshop-details.service';
import { CreateWorkshopDetailsInput, UpdateWorkshopDetailsInput } from './dto/index';

@Resolver(() => WorkshopDetails)
export class WorkshopDetailsResolver {
  constructor(private readonly workshopDetailsService: WorkshopDetailsService) {}

  @Mutation(() => WorkshopDetails)
  async createWorkshopDetails(@Args('data') data: CreateWorkshopDetailsInput) {
    return this.workshopDetailsService.createWorkshopDetails(data);
  }

  @Mutation(() => WorkshopDetails)
  async updateWorkshopDetails(@Args('data') data: UpdateWorkshopDetailsInput) {
    return this.workshopDetailsService.updateWorkshopDetails(data);
  }

  @Query(() => WorkshopDetails, { nullable: true })
  async workshopDetails(@Args('workshopId') workshopId: bigint) {
    return this.workshopDetailsService.findWorkshopDetailsById(workshopId);
  }
}
