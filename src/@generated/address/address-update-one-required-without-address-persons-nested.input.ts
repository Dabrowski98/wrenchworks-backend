import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutAddressPersonsInput } from './address-create-without-address-persons.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutAddressPersonsInput } from './address-create-or-connect-without-address-persons.input';
import { AddressUpsertWithoutAddressPersonsInput } from './address-upsert-without-address-persons.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressUpdateToOneWithWhereWithoutAddressPersonsInput } from './address-update-to-one-with-where-without-address-persons.input';

@InputType()
export class AddressUpdateOneRequiredWithoutAddressPersonsNestedInput {

    @Field(() => AddressCreateWithoutAddressPersonsInput, {nullable:true})
    @Type(() => AddressCreateWithoutAddressPersonsInput)
    create?: AddressCreateWithoutAddressPersonsInput;

    @Field(() => AddressCreateOrConnectWithoutAddressPersonsInput, {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutAddressPersonsInput)
    connectOrCreate?: AddressCreateOrConnectWithoutAddressPersonsInput;

    @Field(() => AddressUpsertWithoutAddressPersonsInput, {nullable:true})
    @Type(() => AddressUpsertWithoutAddressPersonsInput)
    upsert?: AddressUpsertWithoutAddressPersonsInput;

    @Field(() => AddressWhereUniqueInput, {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'addressId'>;

    @Field(() => AddressUpdateToOneWithWhereWithoutAddressPersonsInput, {nullable:true})
    @Type(() => AddressUpdateToOneWithWhereWithoutAddressPersonsInput)
    update?: AddressUpdateToOneWithWhereWithoutAddressPersonsInput;
}
