import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserReportWhereInput } from './user-report-where.input';
import { Type } from 'class-transformer';
import { UserReportOrderByWithRelationInput } from './user-report-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UserReportWhereUniqueInput } from './user-report-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserReportCountAggregateInput } from './user-report-count-aggregate.input';
import { UserReportAvgAggregateInput } from './user-report-avg-aggregate.input';
import { UserReportSumAggregateInput } from './user-report-sum-aggregate.input';
import { UserReportMinAggregateInput } from './user-report-min-aggregate.input';
import { UserReportMaxAggregateInput } from './user-report-max-aggregate.input';

@ArgsType()
export class UserReportAggregateArgs {

    @Field(() => UserReportWhereInput, {nullable:true})
    @Type(() => UserReportWhereInput)
    where?: UserReportWhereInput;

    @Field(() => [UserReportOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserReportOrderByWithRelationInput>;

    @Field(() => UserReportWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserReportWhereUniqueInput, 'reportId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserReportCountAggregateInput, {nullable:true})
    _count?: UserReportCountAggregateInput;

    @Field(() => UserReportAvgAggregateInput, {nullable:true})
    _avg?: UserReportAvgAggregateInput;

    @Field(() => UserReportSumAggregateInput, {nullable:true})
    _sum?: UserReportSumAggregateInput;

    @Field(() => UserReportMinAggregateInput, {nullable:true})
    _min?: UserReportMinAggregateInput;

    @Field(() => UserReportMaxAggregateInput, {nullable:true})
    _max?: UserReportMaxAggregateInput;
}
