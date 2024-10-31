import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWorkshopWhereUniqueInput } from './address-workshop-where-unique.input';
import { Type } from 'class-transformer';
import { AddressWorkshopCreateWithoutAddressInput } from './address-workshop-create-without-address.input';

@InputType()
export class AddressWorkshopCreateOrConnectWithoutAddressInput {

    @Field(() => AddressWorkshopWhereUniqueInput, {nullable:false})
    @Type(() => AddressWorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWorkshopWhereUniqueInput, 'addressId_workshopId'>;

    @Field(() => AddressWorkshopCreateWithoutAddressInput, {nullable:false})
    @Type(() => AddressWorkshopCreateWithoutAddressInput)
    create!: AddressWorkshopCreateWithoutAddressInput;
}
