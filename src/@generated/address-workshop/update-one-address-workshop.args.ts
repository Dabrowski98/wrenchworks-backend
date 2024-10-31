import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressWorkshopUpdateInput } from './address-workshop-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AddressWorkshopWhereUniqueInput } from './address-workshop-where-unique.input';

@ArgsType()
export class UpdateOneAddressWorkshopArgs {

    @Field(() => AddressWorkshopUpdateInput, {nullable:false})
    @Type(() => AddressWorkshopUpdateInput)
    data!: AddressWorkshopUpdateInput;

    @Field(() => AddressWorkshopWhereUniqueInput, {nullable:false})
    @Type(() => AddressWorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWorkshopWhereUniqueInput, 'addressId_workshopId'>;
}
