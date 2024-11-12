import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserReportCountAggregate } from './user-report-count-aggregate.output';
import { UserReportAvgAggregate } from './user-report-avg-aggregate.output';
import { UserReportSumAggregate } from './user-report-sum-aggregate.output';
import { UserReportMinAggregate } from './user-report-min-aggregate.output';
import { UserReportMaxAggregate } from './user-report-max-aggregate.output';

@ObjectType()
export class AggregateUserReport {

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
