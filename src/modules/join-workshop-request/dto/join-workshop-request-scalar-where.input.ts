import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { EnumJoinWorkshopRequestStatusFilter } from '../../prisma/dto/enum-join-workshop-request-status-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { HideField } from 'nestjs-graphql';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';

@InputType()
export class JoinWorkshopRequestScalarWhereInput {

    @Field(() => [JoinWorkshopRequestScalarWhereInput], {nullable:true})
    AND?: Array<JoinWorkshopRequestScalarWhereInput>;

    @Field(() => [JoinWorkshopRequestScalarWhereInput], {nullable:true})
    OR?: Array<JoinWorkshopRequestScalarWhereInput>;

    @Field(() => [JoinWorkshopRequestScalarWhereInput], {nullable:true})
    NOT?: Array<JoinWorkshopRequestScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    joinWorkshopRequestId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    receiverId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    workshopId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    employeeId?: BigIntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    message?: StringNullableFilter;

    @Field(() => EnumJoinWorkshopRequestStatusFilter, {nullable:true})
    status?: EnumJoinWorkshopRequestStatusFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    @HideField()
    createdAt?: DateTimeNullableFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    @HideField()
    createdBy?: BigIntNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    @HideField()
    updatedBy?: BigIntNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    @HideField()
    resolvedAt?: DateTimeNullableFilter;
}
