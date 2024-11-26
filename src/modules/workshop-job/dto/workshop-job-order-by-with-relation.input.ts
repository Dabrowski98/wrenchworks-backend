import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { Type } from 'class-transformer';
import { HideField } from '@nestjs/graphql';
import { TaskOrderByRelationAggregateInput } from '../../task/dto/task-order-by-relation-aggregate.input';
import { ValidateNested } from 'class-validator';
import { JobOrderByWithRelationInput } from '../../job/dto/job-order-by-with-relation.input';
import { WorkshopOrderByWithRelationInput } from '../../workshop/dto/workshop-order-by-with-relation.input';

@InputType()
export class WorkshopJobOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    workshopJobId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    jobId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    workshopJobDescription?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    minPrice?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    maxPrice?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    availability?: keyof typeof SortOrder;

    @HideField()
    createdAt?: SortOrderInput;

    @HideField()
    createdBy?: SortOrderInput;

    @HideField()
    updatedAt?: SortOrderInput;

    @HideField()
    updatedBy?: SortOrderInput;

    @Field(() => TaskOrderByRelationAggregateInput, {nullable:true})
    @Type(() => TaskOrderByRelationAggregateInput)
    @ValidateNested()
    @Type(() => TaskOrderByRelationAggregateInput)
    tasks?: TaskOrderByRelationAggregateInput;

    @Field(() => JobOrderByWithRelationInput, {nullable:true})
    @Type(() => JobOrderByWithRelationInput)
    @ValidateNested()
    @Type(() => JobOrderByWithRelationInput)
    job?: JobOrderByWithRelationInput;

    @Field(() => WorkshopOrderByWithRelationInput, {nullable:true})
    @Type(() => WorkshopOrderByWithRelationInput)
    @ValidateNested()
    @Type(() => WorkshopOrderByWithRelationInput)
    workshop?: WorkshopOrderByWithRelationInput;
}
