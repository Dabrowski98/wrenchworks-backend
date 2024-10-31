import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { UsersStatus } from '../prisma/users-status.enum';
import { ReviewUncheckedCreateNestedManyWithoutUserInput } from '../review/review-unchecked-create-nested-many-without-user.input';
import { Type } from 'class-transformer';
import { ReviewResponseUncheckedCreateNestedManyWithoutUserInput } from '../review-response/review-response-unchecked-create-nested-many-without-user.input';
import { UserReportUncheckedCreateNestedManyWithoutUserInput } from '../user-report/user-report-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    personId?: bigint | number;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;

    @Field(() => UsersStatus, {nullable:true})
    status?: keyof typeof UsersStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => ReviewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => ReviewUncheckedCreateNestedManyWithoutUserInput)
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ReviewResponseUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => ReviewResponseUncheckedCreateNestedManyWithoutUserInput)
    reviewResponses?: ReviewResponseUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => UserReportUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    userReports?: UserReportUncheckedCreateNestedManyWithoutUserInput;
}
