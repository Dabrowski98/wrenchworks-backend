import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { PersonListRelationFilter } from 'src/modules/person/dto/person-list-relation-filter.input';
import { BigIntFilter } from 'src/modules/prisma/dto/generated/big-int-filter.input';
import { StringFilter } from 'src/modules/prisma/dto/generated/string-filter.input';
import { StringNullableFilter } from 'src/modules/prisma/dto/generated/string-nullable-filter.input';

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

    @Field(() => WorkshopNullableRelationFilter, {nullable:true})
    @Type(() => WorkshopNullableRelationFilter)
    workshop?: WorkshopNullableRelationFilter;
}
