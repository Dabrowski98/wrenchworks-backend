import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { UsersStatus } from '../../prisma/dto/users-status.enum';
import { Review } from '../../review/dto/review.model';
import { ReviewResponse } from '../../review-response/dto/review-response.model';
import { UserReport } from '../../user-report/dto/user-report.model';
import { Person } from '../../person/dto/person.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    userId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    personId!: bigint | null;

    @Field(() => String, {nullable:false})
    username!: string;

    /**
     * Note: Password will be hashed before storage
     */
    @HideField()
    password!: string;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => String, {nullable:true})
    avatarURL!: string | null;

    @Field(() => Boolean, {nullable:true})
    isVerified!: boolean | null;

    @Field(() => UsersStatus, {nullable:true,defaultValue:'active'})
    status!: keyof typeof UsersStatus | null;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => [Review], {nullable:true})
    reviews?: Array<Review>;

    @Field(() => [ReviewResponse], {nullable:true})
    reviewResponses?: Array<ReviewResponse>;

    @Field(() => [UserReport], {nullable:true})
    userReports?: Array<UserReport>;

    @Field(() => Person, {nullable:true})
    person?: Person | null;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
