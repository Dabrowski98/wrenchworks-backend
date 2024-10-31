import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { JobCreateNestedOneWithoutJobWorkshopsInput } from '../job/job-create-nested-one-without-job-workshops.input';
import { WorkshopCreateNestedOneWithoutWorkshopJobsInput } from '../workshop/workshop-create-nested-one-without-workshop-jobs.input';

@InputType()
export class WorkshopJobCreateInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopJobId?: bigint | number;

    @Field(() => String, {nullable:true})
    workshopDescription?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    minPrice?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    maxPrice?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price?: Decimal;

    @Field(() => Boolean, {nullable:true})
    availability?: boolean;

    @Field(() => JobCreateNestedOneWithoutJobWorkshopsInput, {nullable:false})
    @Type(() => JobCreateNestedOneWithoutJobWorkshopsInput)
    job!: JobCreateNestedOneWithoutJobWorkshopsInput;

    @Field(() => WorkshopCreateNestedOneWithoutWorkshopJobsInput, {nullable:false})
    @Type(() => WorkshopCreateNestedOneWithoutWorkshopJobsInput)
    workshop!: WorkshopCreateNestedOneWithoutWorkshopJobsInput;
}
