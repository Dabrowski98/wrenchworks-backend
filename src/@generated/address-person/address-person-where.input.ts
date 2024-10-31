import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { AddressRelationFilter } from '../address/address-relation-filter.input';
import { PersonRelationFilter } from '../person/person-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class AddressPersonWhereInput {

    @Field(() => [AddressPersonWhereInput], {nullable:true})
    AND?: Array<AddressPersonWhereInput>;

    @Field(() => [AddressPersonWhereInput], {nullable:true})
    OR?: Array<AddressPersonWhereInput>;

    @Field(() => [AddressPersonWhereInput], {nullable:true})
    NOT?: Array<AddressPersonWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    addressId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    personId?: BigIntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => AddressRelationFilter, {nullable:true})
    address?: AddressRelationFilter;

    @Field(() => PersonRelationFilter, {nullable:true})
    @Type(() => PersonRelationFilter)
    person?: PersonRelationFilter;
}
