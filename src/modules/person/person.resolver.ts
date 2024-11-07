import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { PersonService } from './person.service';
import { DeletePayload } from 'src/common/payloads/delete.payload';
import { GraphQLBigInt } from 'graphql-scalars';
import { Address } from '../address/dto/generated/address.model';
import { Customer } from '../customer/dto/generated/customer.model';
import { Employee } from '../employee/dto/generated/employee.model';
import { ServiceRequest } from '../service-request/dto/generated/service-request.model';
import { User } from '../user/dto/generated/user.model';
import { Vehicle } from '../vehicle/dto/generated/vehicle.model';
import { Workshop } from '../workshop/dto/generated/workshop.model';
import { Person } from './dto/generated/person.model';
import { PersonCount } from './dto/generated/person-count.output';

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

  @Query(() => [Person])
  persons(): Promise<Person[]> {
    return this.personService.findAllPersons();
  }

  @Query(() => Person)
  person(
    @Args('personId', { type: () => GraphQLBigInt }) personId: bigint,
  ): Promise<Person> {
    return this.personService.findPersonById(personId);
  }

  @Mutation(() => DeletePayload)
  deletePerson(
    @Args('personId', { type: () => GraphQLBigInt }) personId: bigint,
  ): Promise<DeletePayload> {
    return this.personService.deletePerson(personId);
  }

  //RESOLVE FIELDS

  @ResolveField(() => Address)
  address(@Parent() person: Person): Promise<Address | null> {
    return this.personService.address(person.personId);
  }

  @ResolveField(() => [Customer])
  customers(@Parent() person: Person): Promise<Customer[]> {
    return this.personService.customers(person.personId);
  }

  @ResolveField(() => [Employee])
  employees(@Parent() person: Person): Promise<Employee[]> {
    return this.personService.employees(person.personId);
  }

  @ResolveField(() => [ServiceRequest])
  serviceRequests(@Parent() person: Person): Promise<ServiceRequest[]> {
    return this.personService.serviceRequests(person.personId);
  }

  @ResolveField(() => User)
  user(@Parent() person: Person): Promise<User> {
    return this.personService.user(person.personId);
  }

  @ResolveField(() => [Vehicle])
  vehicles(@Parent() person: Person): Promise<Vehicle[]> {
    return this.personService.vehicles(person.personId);
  }

  @ResolveField(() => [Workshop])
  workshops(@Parent() person: Person): Promise<Workshop[]> {
    return this.personService.workshops(person.personId);
  }

  @ResolveField(() => PersonCount)
  async _count(@Parent() person: Person): Promise<PersonCount> {
    return this.personService.resolveCount(person.personId);
  }
}
