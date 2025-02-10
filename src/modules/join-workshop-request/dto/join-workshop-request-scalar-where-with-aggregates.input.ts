import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../../prisma/dto/big-int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../../prisma/dto/string-nullable-with-aggregates-filter.input';
import { EnumJoinWorkshopRequestStatusWithAggregatesFilter } from '../../prisma/dto/enum-join-workshop-request-status-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../../prisma/dto/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { BigIntNullableWithAggregatesFilter } from '../../prisma/dto/big-int-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../../prisma/dto/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class JoinWorkshopRequestScalarWhereWithAggregatesInput {

    @Field(() => [JoinWorkshopRequestScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<JoinWorkshopRequestScalarWhereWithAggregatesInput>;

    @Field(() => [JoinWorkshopRequestScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<JoinWorkshopRequestScalarWhereWithAggregatesInput>;

    @Field(() => [JoinWorkshopRequestScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<JoinWorkshopRequestScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    joinWorkshopRequestId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    receiverId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    workshopId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    employeeId?: BigIntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    message?: StringNullableWithAggregatesFilter;

    @Field(() => EnumJoinWorkshopRequestStatusWithAggregatesFilter, {nullable:true})
    status?: EnumJoinWorkshopRequestStatusWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    createdBy?: BigIntNullableWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    updatedBy?: BigIntNullableWithAggregatesFilter;

    @HideField()
    resolvedAt?: DateTimeNullableWithAggregatesFilter;
}
