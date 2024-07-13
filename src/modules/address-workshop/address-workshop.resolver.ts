import { Resolver, Query, Args, Parent, ResolveField } from '@nestjs/graphql';
import { AddressWorkshop } from './entities/address-workshop.entity';
import { AddressWorkshopService } from './address-workshop.service';
import { Address } from 'src/modules/address/entities/address.entity';
import { Workshop } from 'src/modules/workshop/entities/workshop.entity';

@Resolver(() => AddressWorkshop)
export class AddressWorkshopResolver {
  constructor(private readonly addressWorkshopService: AddressWorkshopService) {}

  @Query(() => [AddressWorkshop])
  async addressWorkshops() {
    return this.addressWorkshopService.findAllAddressWorkshops();
  }

  @Query(() => [AddressWorkshop])
  async addressWorkshopByAddressId(@Args('addressId', { type: () => BigInt }) addressId: bigint) {
    return this.addressWorkshopService.findAddressWorkshopByAddressId(addressId);
  }

  @Query(() => [AddressWorkshop])
  async addressWorkshopByWorkshopId(@Args('workshopId', { type: () => BigInt }) workshopId: bigint) {
    return this.addressWorkshopService.findAddressWorkshopByWorkshopId(workshopId);
  }

  @ResolveField(() => Address)
  async address(@Parent() addressWorkshop: AddressWorkshop) {
    return addressWorkshop.address;
  }

  @ResolveField(() => Workshop)
  async workshop(@Parent() addressWorkshop: AddressWorkshop) {
    return addressWorkshop.workshop;
  }
}
