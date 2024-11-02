import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Type } from 'class-transformer';
import { AddressUpdateWithoutPersonsInput } from './address-update-without-persons.input';

@InputType()
export class AddressUpdateWithWhereUniqueWithoutPersonsInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'addressId'>;

    @Field(() => AddressUpdateWithoutPersonsInput, {nullable:false})
    @Type(() => AddressUpdateWithoutPersonsInput)
    data!: AddressUpdateWithoutPersonsInput;
}
