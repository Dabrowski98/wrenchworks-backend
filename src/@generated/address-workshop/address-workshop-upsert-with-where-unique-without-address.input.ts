import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWorkshopWhereUniqueInput } from './address-workshop-where-unique.input';
import { Type } from 'class-transformer';
import { AddressWorkshopUpdateWithoutAddressInput } from './address-workshop-update-without-address.input';
import { AddressWorkshopCreateWithoutAddressInput } from './address-workshop-create-without-address.input';

@InputType()
export class AddressWorkshopUpsertWithWhereUniqueWithoutAddressInput {

    @Field(() => AddressWorkshopWhereUniqueInput, {nullable:false})
    @Type(() => AddressWorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWorkshopWhereUniqueInput, 'addressId_workshopId'>;

    @Field(() => AddressWorkshopUpdateWithoutAddressInput, {nullable:false})
    @Type(() => AddressWorkshopUpdateWithoutAddressInput)
    update!: AddressWorkshopUpdateWithoutAddressInput;

    @Field(() => AddressWorkshopCreateWithoutAddressInput, {nullable:false})
    @Type(() => AddressWorkshopCreateWithoutAddressInput)
    create!: AddressWorkshopCreateWithoutAddressInput;
}
