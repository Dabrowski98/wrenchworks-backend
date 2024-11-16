import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { WorkshopJobOrderByWithRelationInput } from '../../workshop-job/dto/workshop-job-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { ServiceOrderByWithRelationInput } from '../../service/dto/service-order-by-with-relation.input';
import { EmployeeTaskOrderByRelationAggregateInput } from '../../employee-task/dto/employee-task-order-by-relation-aggregate.input';

@InputType()
export class TaskOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    taskId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    serviceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopJobId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    customName?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    status?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    executionTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    partsCost?: keyof typeof SortOrder;

    @Field(() => WorkshopJobOrderByWithRelationInput, {nullable:true})
    @Type(() => WorkshopJobOrderByWithRelationInput)
    workshopJob?: WorkshopJobOrderByWithRelationInput;

    @Field(() => ServiceOrderByWithRelationInput, {nullable:true})
    @Type(() => ServiceOrderByWithRelationInput)
    service?: ServiceOrderByWithRelationInput;

    @Field(() => EmployeeTaskOrderByRelationAggregateInput, {nullable:true})
    @Type(() => EmployeeTaskOrderByRelationAggregateInput)
    taskEmployees?: EmployeeTaskOrderByRelationAggregateInput;
}
