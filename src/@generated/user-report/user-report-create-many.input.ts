import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { UserReportsReportedType } from '../prisma/user-reports-reported-type.enum';
import { UserReportsStatus } from '../prisma/user-reports-status.enum';

@InputType()
export class UserReportCreateManyInput {

    @HideField()
    reportId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    userId!: bigint | number;

    @Field(() => String, {nullable:false})
    reportText!: string;

    @Field(() => UserReportsReportedType, {nullable:false})
    reportedType!: keyof typeof UserReportsReportedType;

    @Field(() => String, {nullable:false})
    reportedId!: bigint | number;

    @Field(() => UserReportsStatus, {nullable:true})
    status?: keyof typeof UserReportsStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
