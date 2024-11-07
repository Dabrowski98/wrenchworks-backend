import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumWorkshopsDetailsStatusNullableFilter } from '../prisma/enum-workshops-details-status-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { WorkshopRelationFilter } from '../workshop/workshop-relation-filter.input';

@InputType()
export class WorkshopDetailsWhereInput {

    @Field(() => [WorkshopDetailsWhereInput], {nullable:true})
    @Type(() => WorkshopDetailsWhereInput)
    AND?: Array<WorkshopDetailsWhereInput>;

    @Field(() => [WorkshopDetailsWhereInput], {nullable:true})
    @Type(() => WorkshopDetailsWhereInput)
    OR?: Array<WorkshopDetailsWhereInput>;

    @Field(() => [WorkshopDetailsWhereInput], {nullable:true})
    @Type(() => WorkshopDetailsWhereInput)
    NOT?: Array<WorkshopDetailsWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    workshopId?: BigIntFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    rating?: DecimalFilter;

    @Field(() => StringFilter, {nullable:true})
    workshopName?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    telephoneNumber?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    logoURL?: StringNullableFilter;

    @Field(() => EnumWorkshopsDetailsStatusNullableFilter, {nullable:true})
    status?: EnumWorkshopsDetailsStatusNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    NIP?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => WorkshopRelationFilter, {nullable:true})
    @Type(() => WorkshopRelationFilter)
    workshop?: WorkshopRelationFilter;
}
