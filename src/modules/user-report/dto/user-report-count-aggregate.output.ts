import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserReportCountAggregate {

    @Field(() => Int, {nullable:false})
    reportId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    reportText!: number;

    @Field(() => Int, {nullable:false})
    reportType!: number;

    @Field(() => Int, {nullable:false})
    reportedEntityType!: number;

    @Field(() => Int, {nullable:false})
    reportedId!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    updatedBy!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
