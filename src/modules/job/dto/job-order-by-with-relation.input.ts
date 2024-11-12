import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { JobCategoryOrderByWithRelationInput } from '../../job-category/dto/job-category-order-by-with-relation.input';
import { ServiceRequestOrderByRelationAggregateInput } from '../../service-request/dto/service-request-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { WorkshopJobOrderByRelationAggregateInput } from '../../workshop-job/dto/workshop-job-order-by-relation-aggregate.input';

@InputType()
export class JobOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    jobId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    name?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isPopular?: keyof typeof SortOrder;

    @Field(() => JobCategoryOrderByWithRelationInput, {nullable:true})
    jobCategory?: JobCategoryOrderByWithRelationInput;

    @Field(() => ServiceRequestOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ServiceRequestOrderByRelationAggregateInput)
    serviceRequests?: ServiceRequestOrderByRelationAggregateInput;

    @Field(() => WorkshopJobOrderByRelationAggregateInput, {nullable:true})
    @Type(() => WorkshopJobOrderByRelationAggregateInput)
    jobWorkshops?: WorkshopJobOrderByRelationAggregateInput;
}
