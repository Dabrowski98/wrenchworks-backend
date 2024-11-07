import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsOptional } from 'class-validator';
import { CreatePersonInput } from './create-person.input';

@InputType()
export class CreateOnePersonArgs {
  @Field(() => CreatePersonInput)
  data: CreatePersonInput;
}
