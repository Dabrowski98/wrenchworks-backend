import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PersonWhereUniqueInput } from './person-where-unique.input';
import { Type } from 'class-transformer';
import { PersonUpdateWithoutAddressesInput } from './person-update-without-addresses.input';

@InputType()
export class PersonUpdateWithWhereUniqueWithoutAddressesInput {

    @Field(() => PersonWhereUniqueInput, {nullable:false})
    @Type(() => PersonWhereUniqueInput)
    where!: Prisma.AtLeast<PersonWhereUniqueInput, 'personId'>;

    @Field(() => PersonUpdateWithoutAddressesInput, {nullable:false})
    @Type(() => PersonUpdateWithoutAddressesInput)
    data!: PersonUpdateWithoutAddressesInput;
}
