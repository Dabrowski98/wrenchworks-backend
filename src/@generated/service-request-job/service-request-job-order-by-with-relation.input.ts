import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { JobOrderByWithRelationInput } from '../job/job-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { ServiceRequestOrderByWithRelationInput } from '../service-request/service-request-order-by-with-relation.input';

@InputType()
export class ServiceRequestJobOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    serviceRequestId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    jobId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => JobOrderByWithRelationInput, {nullable:true})
    @Type(() => JobOrderByWithRelationInput)
    job?: JobOrderByWithRelationInput;

    @Field(() => ServiceRequestOrderByWithRelationInput, {nullable:true})
    @Type(() => ServiceRequestOrderByWithRelationInput)
    serviceRequest?: ServiceRequestOrderByWithRelationInput;
}
