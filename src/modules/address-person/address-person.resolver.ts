import { Resolver, Query, Args, Parent, ResolveField } from '@nestjs/graphql';
import { AddressPerson } from './entities/address-person.entity';
import { AddressPersonService } from './address-person.service';
import { Address } from 'src/modules/address/entities/address.entity';
import { Person } from 'src/modules/person/entities/person.entity';

@Resolver(() => AddressPerson)
export class AddressPersonResolver {
  constructor(private readonly addressPersonService: AddressPersonService) {}

  @Query(() => [AddressPerson])
  async addressPersons() {
    return this.addressPersonService.findAllAddressPersons();
  }

  @Query(() => [AddressPerson])
  async addressPersonByAddressId(@Args('addressId', { type: () => BigInt }) addressId: bigint) {
    return this.addressPersonService.findAddressPersonByAddressId(addressId);
  }

  @Query(() => [AddressPerson])
  async addressPersonByPersonId(@Args('personId', { type: () => BigInt }) personId: bigint) {
    return this.addressPersonService.findAddressPersonByPersonId(personId);
  }

  @ResolveField(() => Address)
  async address(@Parent() addressPerson: AddressPerson) {
    return addressPerson.address;
  }

  @ResolveField(() => Person)
  async person(@Parent() addressPerson: AddressPerson) {
    return addressPerson.person;
  }
}
