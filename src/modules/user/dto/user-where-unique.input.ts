import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { UserWhereInput } from './user-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { EnumUsersStatusNullableFilter } from '../prisma/enum-users-status-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ReviewListRelationFilter } from '../review/review-list-relation-filter.input';
import { Type } from 'class-transformer';
import { ReviewResponseListRelationFilter } from '../review-response/review-response-list-relation-filter.input';
import { UserReportListRelationFilter } from '../user-report/user-report-list-relation-filter.input';
import { PersonNullableRelationFilter } from '../person/person-nullable-relation-filter.input';

@InputType()
export class UserWhereUniqueInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    personId?: bigint | number;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    isVerified?: BoolNullableFilter;

    @Field(() => EnumUsersStatusNullableFilter, {nullable:true})
    status?: EnumUsersStatusNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => ReviewListRelationFilter, {nullable:true})
    @Type(() => ReviewListRelationFilter)
    reviews?: ReviewListRelationFilter;

    @Field(() => ReviewResponseListRelationFilter, {nullable:true})
    @Type(() => ReviewResponseListRelationFilter)
    reviewResponses?: ReviewResponseListRelationFilter;

    @Field(() => UserReportListRelationFilter, {nullable:true})
    userReports?: UserReportListRelationFilter;

    @Field(() => PersonNullableRelationFilter, {nullable:true})
    @Type(() => PersonNullableRelationFilter)
    person?: PersonNullableRelationFilter;
}
