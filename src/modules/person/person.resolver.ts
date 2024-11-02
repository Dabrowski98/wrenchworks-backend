import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { PersonService } from './person.service';
import { CreateOnePersonArgs, Person, UpdateOnePersonArgs } from 'src/@generated/person';
import { DeletePayload } from 'src/common/payloads/delete.payload';
import { GraphQLBigInt } from 'graphql-scalars';
import { Address } from 'src/@generated/address';
import { Customer } from 'src/@generated/customer';
import { Employee } from 'src/@generated/employee';
import { ServiceRequest } from 'src/@generated/service-request';
import { User } from 'src/@generated/user';
import { Vehicle } from 'src/@generated/vehicle';
import { Workshop } from 'src/@generated/workshop';

@Resolver(() => Person)
export class PersonResolver {
  constructor(private readonly personService: PersonService) {}

  @Mutation(() => Person)
  createPerson(@Args() args: CreateOnePersonArgs): Promise<Person> {
    return this.personService.createPerson(args);
  }

  @Mutation(() => Person)
  updatePerson(@Args() args: UpdateOnePersonArgs): Promise<Person> {
    return this.personService.updatePerson(args);
  }

  @Mutation(() => Person)
  softDeletePerson(@Args('personId', { type: () => GraphQLBigInt}) personId: bigint ): Promise<Person> {
    return this.personService.softDeletePerson(personId)
  }

  @Mutation(() => Person)
  recoverPerson(@Args('personId', { type: () => GraphQLBigInt}) personId: bigint ): Promise<Person> {
    return this.personService.recoverPerson(personId)
  }

  @Mutation(() => DeletePayload)
  deletePerson(@Args('personId', { type: () => GraphQLBigInt}) personId: bigint ): Promise<DeletePayload> {
    return this.personService.deletePerson(personId);
  }
  
  @Query(() => [Person])
  persons(): Promise<Person[]> {
    return this.personService.findAllPersons();
  }

  @Query(() => Person)
  person(@Args('personId', { type: () => GraphQLBigInt}) personId: bigint ): Promise<Person> {
    return this.personService.findPersonById(personId);
  }

  //RESOLVE FIELDS

  @ResolveField(() => [Address])
  addresses(@Parent() person: Person): Promise<Address[]> {
    return this.personService.resolveAddresses(person.personId);
  }

  @ResolveField(() => [Customer])
  customers(@Parent() person: Person): Promise<Customer[]> {
    return this.personService.resolveCustomers(person.personId);
  }

  @ResolveField(() => [Employee])
  employees(@Parent() person: Person): Promise<Employee[]> {
    return this.personService.resolveEmployees(person.personId);
  }

  @ResolveField(() => [ServiceRequest])
  serviceRequests(@Parent() person: Person): Promise<ServiceRequest[]> {
    return this.personService.resolveServiceRequests(person.personId);
  }

  @ResolveField(() => User)
  user(@Parent() person: Person): Promise<User> {
    return this.personService.resolveUser(person.personId);
  }

  @ResolveField(() => [Vehicle])
  vehicles(@Parent() person: Person): Promise<Vehicle[]> {
    return this.personService.resolveVehicles(person.personId);
  }

  @ResolveField(() => [Workshop])
  workshops(@Parent() person: Person): Promise<Workshop[]> {
    return this.personService.resolveWorkshops(person.personId);
  }
}
