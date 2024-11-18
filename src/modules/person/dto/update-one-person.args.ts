import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PersonUpdateInput } from './person-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PersonWhereUniqueInput } from './person-where-unique.input';
import * as Validator from 'class-validator';

@ArgsType()
export class UpdateOnePersonArgs {

    @Field(() => PersonUpdateInput, {nullable:false})
    @Type(() => PersonUpdateInput)
    @Validator.ValidateNested()
    data!: PersonUpdateInput;

    @Field(() => PersonWhereUniqueInput, {nullable:false})
    @Type(() => PersonWhereUniqueInput)
    @Validator.Allow()
    where!: Prisma.AtLeast<PersonWhereUniqueInput, 'personId'>;
}
