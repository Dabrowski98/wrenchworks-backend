import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutAddressPersonsInput } from './address-create-without-address-persons.input';

@InputType()
export class AddressCreateOrConnectWithoutAddressPersonsInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'addressId'>;

    @Field(() => AddressCreateWithoutAddressPersonsInput, {nullable:false})
    @Type(() => AddressCreateWithoutAddressPersonsInput)
    create!: AddressCreateWithoutAddressPersonsInput;
}
