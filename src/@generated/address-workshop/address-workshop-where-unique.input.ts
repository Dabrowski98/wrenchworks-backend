import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWorkshopAddressIdWorkshopIdCompoundUniqueInput } from './address-workshop-address-id-workshop-id-compound-unique.input';
import { AddressWorkshopWhereInput } from './address-workshop-where.input';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { AddressRelationFilter } from '../address/address-relation-filter.input';
import { WorkshopRelationFilter } from '../workshop/workshop-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class AddressWorkshopWhereUniqueInput {

    @Field(() => AddressWorkshopAddressIdWorkshopIdCompoundUniqueInput, {nullable:true})
    addressId_workshopId?: AddressWorkshopAddressIdWorkshopIdCompoundUniqueInput;

    @Field(() => [AddressWorkshopWhereInput], {nullable:true})
    AND?: Array<AddressWorkshopWhereInput>;

    @Field(() => [AddressWorkshopWhereInput], {nullable:true})
    OR?: Array<AddressWorkshopWhereInput>;

    @Field(() => [AddressWorkshopWhereInput], {nullable:true})
    NOT?: Array<AddressWorkshopWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    addressId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    workshopId?: BigIntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => AddressRelationFilter, {nullable:true})
    address?: AddressRelationFilter;

    @Field(() => WorkshopRelationFilter, {nullable:true})
    @Type(() => WorkshopRelationFilter)
    workshop?: WorkshopRelationFilter;
}
