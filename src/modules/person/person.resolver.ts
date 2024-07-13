import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Person } from './entities/person.entity';
import { PersonService } from './person.service';
import { CreatePersonInput, UpdatePersonInput } from './dto/index';

@Resolver(() => Person)
export class PersonResolver {
  constructor(private readonly personService: PersonService) {}

  @Mutation(() => Person)
  async createPerson(@Args('data') data: CreatePersonInput) {
    return this.personService.createPerson(data);
  }

  @Mutation(() => Person)
  async deletePerson(@Args('id', { type: () => BigInt }) id: bigint) {
    return this.personService.deletePerson(id);
  }

  @Mutation(() => Person)
  async retrievePerson(@Args('id', { type: () => BigInt }) id: bigint) {
    return this.personService.retrievePerson(id);
  }

  @Mutation(() => Person)
  async destroyPerson(@Args('id', { type: () => BigInt }) id: bigint) {
    return this.personService.destroyPerson(id);
  }

  @Mutation(() => Person)
  async updatePerson(
    @Args('id', { type: () => BigInt }) id: bigint,
    @Args('data') data: UpdatePersonInput,
  ) {
    return this.personService.updatePerson(id, data);
  }

  @Query(() => [Person])
  async persons() {
    return this.personService.findPersons();
  }

  @Query(() => Person, { nullable: true })
  async person(@Args('id', { type: () => BigInt }) id: bigint) {
    return this.personService.findPersonById(id);
  }
}
