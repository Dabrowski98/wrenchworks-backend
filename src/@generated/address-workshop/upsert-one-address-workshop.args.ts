import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWorkshopWhereUniqueInput } from './address-workshop-where-unique.input';
import { Type } from 'class-transformer';
import { AddressWorkshopCreateInput } from './address-workshop-create.input';
import { AddressWorkshopUpdateInput } from './address-workshop-update.input';

@ArgsType()
export class UpsertOneAddressWorkshopArgs {

    @Field(() => AddressWorkshopWhereUniqueInput, {nullable:false})
    @Type(() => AddressWorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWorkshopWhereUniqueInput, 'addressId_workshopId'>;

    @Field(() => AddressWorkshopCreateInput, {nullable:false})
    @Type(() => AddressWorkshopCreateInput)
    create!: AddressWorkshopCreateInput;

    @Field(() => AddressWorkshopUpdateInput, {nullable:false})
    @Type(() => AddressWorkshopUpdateInput)
    update!: AddressWorkshopUpdateInput;
}
