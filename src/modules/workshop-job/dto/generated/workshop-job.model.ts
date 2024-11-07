import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { Job } from '../../../job/dto/generated/job.model';
import { Workshop } from '../../../workshop/dto/generated/workshop.model';

@ObjectType()
export class WorkshopJob {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopJobId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    jobId!: bigint;

    @Field(() => String, {nullable:true})
    workshopDescription!: string | null;

    @Field(() => GraphQLDecimal, {nullable:true})
    minPrice!: Decimal | null;

    @Field(() => GraphQLDecimal, {nullable:true})
    maxPrice!: Decimal | null;

    @Field(() => GraphQLDecimal, {nullable:true})
    price!: Decimal | null;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    availability!: boolean;

    @Field(() => Job, {nullable:false})
    job?: Job;

    @Field(() => Workshop, {nullable:false})
    workshop?: Workshop;
}
