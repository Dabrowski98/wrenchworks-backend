import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PersonUpdateInput } from './person-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PersonWhereUniqueInput } from './person-where-unique.input';
import * as Validator from 'class-validator';
import { GraphQLBigInt } from 'graphql-scalars';

@ArgsType()
export class UpdateOnePersonArgs {
  @Field(() => PersonUpdateInput, { nullable: false })
  @Type(() => PersonUpdateInput)
  @Validator.ValidateNested()
  data!: PersonUpdateInput;

  @Field(() => GraphQLBigInt, { nullable: false })
  @Validator.IsNotEmpty()
  personId!: bigint | number;
  
}
