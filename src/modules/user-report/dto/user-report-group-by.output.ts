import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { UserReportType } from '../../prisma/dto/user-report-type.enum';
import { UserReportReportedEntityType } from '../../prisma/dto/user-report-reported-entity-type.enum';
import { UserReportStatus } from '../../prisma/dto/user-report-status.enum';
import { UserReportCountAggregate } from './user-report-count-aggregate.output';
import { UserReportAvgAggregate } from './user-report-avg-aggregate.output';
import { UserReportSumAggregate } from './user-report-sum-aggregate.output';
import { UserReportMinAggregate } from './user-report-min-aggregate.output';
import { UserReportMaxAggregate } from './user-report-max-aggregate.output';

@ObjectType()
export class UserReportGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    reportId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    userId!: bigint | number;

    @Field(() => String, {nullable:false})
    reportText!: string;

    @Field(() => UserReportType, {nullable:false})
    reportType!: keyof typeof UserReportType;

    @Field(() => UserReportReportedEntityType, {nullable:false})
    reportedEntityType!: keyof typeof UserReportReportedEntityType;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    reportedId!: bigint | number;

    @Field(() => UserReportStatus, {nullable:false})
    status!: keyof typeof UserReportStatus;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: bigint | number;

    @Field(() => UserReportCountAggregate, {nullable:true})
    _count?: UserReportCountAggregate;

    @Field(() => UserReportAvgAggregate, {nullable:true})
    _avg?: UserReportAvgAggregate;

    @Field(() => UserReportSumAggregate, {nullable:true})
    _sum?: UserReportSumAggregate;

    @Field(() => UserReportMinAggregate, {nullable:true})
    _min?: UserReportMinAggregate;

    @Field(() => UserReportMaxAggregate, {nullable:true})
    _max?: UserReportMaxAggregate;
}
