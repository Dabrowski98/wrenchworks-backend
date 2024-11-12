import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { Type } from 'class-transformer';
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

    @Field(() => JobOrderByWithRelationInput, {nullable:true})
    @Type(() => JobOrderByWithRelationInput)
    job?: JobOrderByWithRelationInput;

    @Field(() => WorkshopOrderByWithRelationInput, {nullable:true})
    @Type(() => WorkshopOrderByWithRelationInput)
    workshop?: WorkshopOrderByWithRelationInput;
}
