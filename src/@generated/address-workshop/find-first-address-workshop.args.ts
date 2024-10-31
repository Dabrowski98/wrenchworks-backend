import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressWorkshopWhereInput } from './address-workshop-where.input';
import { Type } from 'class-transformer';
import { AddressWorkshopOrderByWithRelationInput } from './address-workshop-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AddressWorkshopWhereUniqueInput } from './address-workshop-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AddressWorkshopScalarFieldEnum } from './address-workshop-scalar-field.enum';

@ArgsType()
export class FindFirstAddressWorkshopArgs {

    @Field(() => AddressWorkshopWhereInput, {nullable:true})
    @Type(() => AddressWorkshopWhereInput)
    where?: AddressWorkshopWhereInput;

    @Field(() => [AddressWorkshopOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AddressWorkshopOrderByWithRelationInput>;

    @Field(() => AddressWorkshopWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AddressWorkshopWhereUniqueInput, 'addressId_workshopId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AddressWorkshopScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AddressWorkshopScalarFieldEnum>;
}
