import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { BoolNullableFilter } from '../../prisma/dto/bool-nullable-filter.input';
import { EnumUsersStatusNullableFilter } from '../../prisma/dto/enum-users-status-nullable-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { ReviewListRelationFilter } from '../../review/dto/review-list-relation-filter.input';
import { Type } from 'class-transformer';
import { ReviewResponseListRelationFilter } from '../../review-response/dto/review-response-list-relation-filter.input';
import { UserReportListRelationFilter } from '../../user-report/dto/user-report-list-relation-filter.input';
import { PersonNullableRelationFilter } from '../../person/dto/person-nullable-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    userId?: BigIntFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    personId?: BigIntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    username?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    avatarURL?: StringNullableFilter;

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
