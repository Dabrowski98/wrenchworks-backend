import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutAddressWorkshopsInput } from './address-create-without-address-workshops.input';

@InputType()
export class AddressCreateOrConnectWithoutAddressWorkshopsInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'addressId'>;

    @Field(() => AddressCreateWithoutAddressWorkshopsInput, {nullable:false})
    @Type(() => AddressCreateWithoutAddressWorkshopsInput)
    create!: AddressCreateWithoutAddressWorkshopsInput;
}
