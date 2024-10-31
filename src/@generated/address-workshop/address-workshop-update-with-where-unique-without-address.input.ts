import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWorkshopWhereUniqueInput } from './address-workshop-where-unique.input';
import { Type } from 'class-transformer';
import { AddressWorkshopUpdateWithoutAddressInput } from './address-workshop-update-without-address.input';

@InputType()
export class AddressWorkshopUpdateWithWhereUniqueWithoutAddressInput {

    @Field(() => AddressWorkshopWhereUniqueInput, {nullable:false})
    @Type(() => AddressWorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWorkshopWhereUniqueInput, 'addressId_workshopId'>;

    @Field(() => AddressWorkshopUpdateWithoutAddressInput, {nullable:false})
    @Type(() => AddressWorkshopUpdateWithoutAddressInput)
    data!: AddressWorkshopUpdateWithoutAddressInput;
}
