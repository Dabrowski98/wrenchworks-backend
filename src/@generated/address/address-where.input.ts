import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { PersonListRelationFilter } from '../person/person-list-relation-filter.input';
import { Type } from 'class-transformer';
import { WorkshopListRelationFilter } from '../workshop/workshop-list-relation-filter.input';

@InputType()
export class AddressWhereInput {

    @Field(() => [AddressWhereInput], {nullable:true})
    AND?: Array<AddressWhereInput>;

    @Field(() => [AddressWhereInput], {nullable:true})
    OR?: Array<AddressWhereInput>;

    @Field(() => [AddressWhereInput], {nullable:true})
    NOT?: Array<AddressWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    addressId?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    country?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    region?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    city?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    street?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    buildingNo?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    flatNo?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    postCode?: StringFilter;

    @Field(() => PersonListRelationFilter, {nullable:true})
    @Type(() => PersonListRelationFilter)
    persons?: PersonListRelationFilter;

    @Field(() => WorkshopListRelationFilter, {nullable:true})
    @Type(() => WorkshopListRelationFilter)
    workshops?: WorkshopListRelationFilter;
}
