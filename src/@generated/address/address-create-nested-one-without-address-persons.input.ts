import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutAddressPersonsInput } from './address-create-without-address-persons.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutAddressPersonsInput } from './address-create-or-connect-without-address-persons.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';

@InputType()
export class AddressCreateNestedOneWithoutAddressPersonsInput {

    @Field(() => AddressCreateWithoutAddressPersonsInput, {nullable:true})
    @Type(() => AddressCreateWithoutAddressPersonsInput)
    create?: AddressCreateWithoutAddressPersonsInput;

    @Field(() => AddressCreateOrConnectWithoutAddressPersonsInput, {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutAddressPersonsInput)
    connectOrCreate?: AddressCreateOrConnectWithoutAddressPersonsInput;

    @Field(() => AddressWhereUniqueInput, {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'addressId'>;
}
