import {
  Resolver,
  Query,
  Args,
  Parent,
  ResolveField,
  Mutation,
} from '@nestjs/graphql';
import { AddressPersonService } from './address-person.service';
import {
  AddressPerson,
  AddressPersonAddressIdPersonIdCompoundUniqueInput,
  CreateOneAddressPersonArgs,
  DeleteOneAddressPersonArgs,
} from 'src/@generated/address-person';
import { Address } from 'src/@generated/address';
import { Person } from 'src/@generated/person';
import { DeletePayload } from 'src/common/payloads/delete.payload';
import * as Scalars from 'graphql-scalars';

@Resolver(() => AddressPerson)
export class AddressPersonResolver {
  constructor(private readonly addressPersonService: AddressPersonService) {}

  @Mutation(() => AddressPerson)
  linkAddressToPerson(
    @Args() args: CreateOneAddressPersonArgs,
  ): Promise<AddressPerson> {
    return this.addressPersonService.linkAddressToPerson(args);
  }

  @Mutation(() => DeletePayload)
  unlinkAddressFromPerson(
    @Args() args: DeleteOneAddressPersonArgs,
  ): Promise<DeletePayload> {
    return this.addressPersonService.unlinkAddressFromPerson(args);
  }

  @Query(() => [AddressPerson])
  addressPersons() {
    return this.addressPersonService.findAllAddressPersons();
  }

  @Query(() => [AddressPerson])
  addressPersonByAddressId(
    @Args('addressId', { type: () => Scalars.GraphQLBigInt }) addressId: bigint,
  ) {
    return this.addressPersonService.findAddressPersonByAddressId(
      addressId,
    );
  }

  @Query(() => [AddressPerson])
  addressPersonByPersonId(
    @Args('personId', { type: () => Scalars.GraphQLBigInt }) personId: bigint,
  ) {
    return this.addressPersonService.findAddressPersonByPersonId(personId);
  }

  @ResolveField(() => Address)
  address(@Parent() addressPerson: AddressPerson): Promise<Address> {
    return this.addressPersonService.resolveAddress(addressPerson.addressId);
  }

  @ResolveField(() => Person)
  person(@Parent() addressPerson: AddressPerson): Promise<Person> {
    return this.addressPersonService.resolvePerson(addressPerson.personId);
  }
}
