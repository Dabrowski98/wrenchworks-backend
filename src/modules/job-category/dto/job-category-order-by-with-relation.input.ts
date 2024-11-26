import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { JobCategoryOrderByRelationAggregateInput } from './job-category-order-by-relation-aggregate.input';
import { JobOrderByRelationAggregateInput } from '../../job/dto/job-order-by-relation-aggregate.input';
import { WorkshopOrderByRelationAggregateInput } from '../../workshop/dto/workshop-order-by-relation-aggregate.input';

@InputType()
export class JobCategoryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    parentId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isPopular?: keyof typeof SortOrder;

    @Field(() => JobCategoryOrderByWithRelationInput, {nullable:true})
    @ValidateNested()
    @Type(() => JobCategoryOrderByWithRelationInput)
    parent?: JobCategoryOrderByWithRelationInput;

    @Field(() => JobCategoryOrderByRelationAggregateInput, {nullable:true})
    @ValidateNested()
    @Type(() => JobCategoryOrderByRelationAggregateInput)
    children?: JobCategoryOrderByRelationAggregateInput;

    @Field(() => JobOrderByRelationAggregateInput, {nullable:true})
    @Type(() => JobOrderByRelationAggregateInput)
    @ValidateNested()
    @Type(() => JobOrderByRelationAggregateInput)
    jobs?: JobOrderByRelationAggregateInput;

    @Field(() => WorkshopOrderByRelationAggregateInput, {nullable:true})
    @Type(() => WorkshopOrderByRelationAggregateInput)
    @ValidateNested()
    @Type(() => WorkshopOrderByRelationAggregateInput)
    workshops?: WorkshopOrderByRelationAggregateInput;
}
