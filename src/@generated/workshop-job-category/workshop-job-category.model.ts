import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { JobCategory } from '../job-category/job-category.model';
import { Workshop } from '../workshop/workshop.model';

@ObjectType()
export class WorkshopJobCategory {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    categoryId!: bigint;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => JobCategory, {nullable:false})
    jobCategory?: JobCategory;

    @Field(() => Workshop, {nullable:false})
    workshop?: Workshop;
}
