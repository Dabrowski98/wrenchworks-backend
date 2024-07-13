import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Workshop } from './entities/workshop.entity';
import { WorkshopService } from './workshop.service';
import { CreateWorkshopInput, UpdateWorkshopInput } from './dto/index';

@Resolver(() => Workshop)
export class WorkshopResolver {
  constructor(private readonly workshopService: WorkshopService) {}

  @Mutation(() => Workshop)
  async createWorkshop(@Args('data') data: CreateWorkshopInput) {
    return this.workshopService.createWorkshop(data);
  }

  @Mutation(() => Workshop)
  async deleteWorkshop(@Args('id', { type: () => BigInt }) id: bigint) {
    return this.workshopService.deleteWorkshop(id);
  }

  @Mutation(() => Workshop)
  async retrieveWorkshop(@Args('id', { type: () => BigInt }) id: bigint) {
    return this.workshopService.retrieveWorkshop(id);
  }

  @Mutation(() => Workshop)
  async destroyWorkshop(@Args('id', { type: () => BigInt }) id: bigint) {
    return this.workshopService.destroyWorkshop(id);
  }

  @Mutation(() => Workshop)
  async updateWorkshop(
    @Args('id', { type: () => BigInt }) id: bigint,
    @Args('data') data: UpdateWorkshopInput,
  ) {
    return this.workshopService.updateWorkshop(id, data);
  }

  @Query(() => [Workshop])
  async workshops() {
    return this.workshopService.findWorkshops();
  }

  @Query(() => Workshop, { nullable: true })
  async workshop(@Args('id', { type: () => BigInt }) id: bigint) {
    return this.workshopService.findWorkshopById(id);
  }
}
