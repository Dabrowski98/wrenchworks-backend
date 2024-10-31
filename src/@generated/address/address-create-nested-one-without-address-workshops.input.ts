import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutAddressWorkshopsInput } from './address-create-without-address-workshops.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutAddressWorkshopsInput } from './address-create-or-connect-without-address-workshops.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';

@InputType()
export class AddressCreateNestedOneWithoutAddressWorkshopsInput {

    @Field(() => AddressCreateWithoutAddressWorkshopsInput, {nullable:true})
    @Type(() => AddressCreateWithoutAddressWorkshopsInput)
    create?: AddressCreateWithoutAddressWorkshopsInput;

    @Field(() => AddressCreateOrConnectWithoutAddressWorkshopsInput, {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutAddressWorkshopsInput)
    connectOrCreate?: AddressCreateOrConnectWithoutAddressWorkshopsInput;

    @Field(() => AddressWhereUniqueInput, {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'addressId'>;
}
