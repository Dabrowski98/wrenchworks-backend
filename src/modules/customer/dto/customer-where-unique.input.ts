import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCustomerIdWorkshopIdCompoundUniqueInput } from './customer-customer-id-workshop-id-compound-unique.input';
import { Type } from 'class-transformer';
import { CustomerWhereInput } from './customer-where.input';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { DecimalFilter } from '../../prisma/dto/decimal-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { PersonRelationFilter } from '../../person/dto/person-relation-filter.input';
import { WorkshopRelationFilter } from '../../workshop/dto/workshop-relation-filter.input';
import { ServiceListRelationFilter } from '../../service/dto/service-list-relation-filter.input';

@InputType()
export class CustomerWhereUniqueInput {

    @Field(() => CustomerCustomerIdWorkshopIdCompoundUniqueInput, {nullable:true})
    @Type(() => CustomerCustomerIdWorkshopIdCompoundUniqueInput)
    customerId_workshopId?: CustomerCustomerIdWorkshopIdCompoundUniqueInput;

    @Field(() => [CustomerWhereInput], {nullable:true})
    @Type(() => CustomerWhereInput)
    AND?: Array<CustomerWhereInput>;

    @Field(() => [CustomerWhereInput], {nullable:true})
    @Type(() => CustomerWhereInput)
    OR?: Array<CustomerWhereInput>;

    @Field(() => [CustomerWhereInput], {nullable:true})
    @Type(() => CustomerWhereInput)
    NOT?: Array<CustomerWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    customerId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    workshopId?: BigIntFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    totalDue?: DecimalFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    NIP?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    companyName?: StringNullableFilter;

    @Field(() => PersonRelationFilter, {nullable:true})
    @Type(() => PersonRelationFilter)
    person?: PersonRelationFilter;

    @Field(() => WorkshopRelationFilter, {nullable:true})
    @Type(() => WorkshopRelationFilter)
    workshop?: WorkshopRelationFilter;

    @Field(() => ServiceListRelationFilter, {nullable:true})
    @Type(() => ServiceListRelationFilter)
    services?: ServiceListRelationFilter;
}
