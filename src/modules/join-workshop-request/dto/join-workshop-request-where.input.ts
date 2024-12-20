import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { EnumJoinWorkshopRequestStatusFilter } from '../../prisma/dto/enum-join-workshop-request-status-filter.input';
import { DateTimeFilter } from '../../prisma/dto/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { UserRelationFilter } from '../../user/dto/user-relation-filter.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopRelationFilter } from '../../workshop/dto/workshop-relation-filter.input';
import { EmployeeRelationFilter } from '../../employee/dto/employee-relation-filter.input';

@InputType()
export class JoinWorkshopRequestWhereInput {

    @Field(() => [JoinWorkshopRequestWhereInput], {nullable:true})
    AND?: Array<JoinWorkshopRequestWhereInput>;

    @Field(() => [JoinWorkshopRequestWhereInput], {nullable:true})
    OR?: Array<JoinWorkshopRequestWhereInput>;

    @Field(() => [JoinWorkshopRequestWhereInput], {nullable:true})
    NOT?: Array<JoinWorkshopRequestWhereInput>;

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

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    @ValidateNested()
    user?: UserRelationFilter;

    @Field(() => WorkshopRelationFilter, {nullable:true})
    @Type(() => WorkshopRelationFilter)
    @ValidateNested()
    @Type(() => WorkshopRelationFilter)
    workshop?: WorkshopRelationFilter;

    @Field(() => EmployeeRelationFilter, {nullable:true})
    @Type(() => EmployeeRelationFilter)
    @ValidateNested()
    @Type(() => EmployeeRelationFilter)
    employee?: EmployeeRelationFilter;
}