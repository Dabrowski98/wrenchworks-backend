import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWorkshopWhereUniqueInput } from './address-workshop-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAddressWorkshopArgs {

    @Field(() => AddressWorkshopWhereUniqueInput, {nullable:false})
    @Type(() => AddressWorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWorkshopWhereUniqueInput, 'addressId_workshopId'>;
}
