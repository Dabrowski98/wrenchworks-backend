import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { JoinWorkshopRequestStatus } from '../../prisma/dto/join-workshop-request-status.enum';
import { JoinWorkshopRequestCountAggregate } from './join-workshop-request-count-aggregate.output';
import { JoinWorkshopRequestAvgAggregate } from './join-workshop-request-avg-aggregate.output';
import { JoinWorkshopRequestSumAggregate } from './join-workshop-request-sum-aggregate.output';
import { JoinWorkshopRequestMinAggregate } from './join-workshop-request-min-aggregate.output';
import { JoinWorkshopRequestMaxAggregate } from './join-workshop-request-max-aggregate.output';

@ObjectType()
export class JoinWorkshopRequestGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    joinWorkshopRequestId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    receiverId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    employeeId!: bigint | number;

    @Field(() => String, {nullable:true})
    message?: string;

    @Field(() => JoinWorkshopRequestStatus, {nullable:false})
    status!: keyof typeof JoinWorkshopRequestStatus;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: bigint | number;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: bigint | number;

    @Field(() => Date, {nullable:true})
    resolvedAt?: Date | string;

    @Field(() => JoinWorkshopRequestCountAggregate, {nullable:true})
    _count?: JoinWorkshopRequestCountAggregate;

    @Field(() => JoinWorkshopRequestAvgAggregate, {nullable:true})
    _avg?: JoinWorkshopRequestAvgAggregate;

    @Field(() => JoinWorkshopRequestSumAggregate, {nullable:true})
    _sum?: JoinWorkshopRequestSumAggregate;

    @Field(() => JoinWorkshopRequestMinAggregate, {nullable:true})
    _min?: JoinWorkshopRequestMinAggregate;

    @Field(() => JoinWorkshopRequestMaxAggregate, {nullable:true})
    _max?: JoinWorkshopRequestMaxAggregate;
}
