import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { HideField } from '@nestjs/graphql';
import { WorkshopJobOrderByWithRelationInput } from '../../workshop-job/dto/workshop-job-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceOrderByWithRelationInput } from '../../service/dto/service-order-by-with-relation.input';
import { EmployeeOrderByRelationAggregateInput } from '../../employee/dto/employee-order-by-relation-aggregate.input';

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

    @HideField()
    createdAt?: SortOrderInput;

    @HideField()
    createdBy?: SortOrderInput;

    @HideField()
    updatedAt?: SortOrderInput;

    @HideField()
    updatedBy?: SortOrderInput;

    @HideField()
    resolvedAt?: SortOrderInput;

    @HideField()
    resolvedBy?: SortOrderInput;

    @Field(() => WorkshopJobOrderByWithRelationInput, {nullable:true})
    @Type(() => WorkshopJobOrderByWithRelationInput)
    @ValidateNested()
    @Type(() => WorkshopJobOrderByWithRelationInput)
    workshopJob?: WorkshopJobOrderByWithRelationInput;

    @Field(() => ServiceOrderByWithRelationInput, {nullable:true})
    @Type(() => ServiceOrderByWithRelationInput)
    @ValidateNested()
    @Type(() => ServiceOrderByWithRelationInput)
    service?: ServiceOrderByWithRelationInput;

    @Field(() => EmployeeOrderByRelationAggregateInput, {nullable:true})
    @Type(() => EmployeeOrderByRelationAggregateInput)
    @ValidateNested()
    @Type(() => EmployeeOrderByRelationAggregateInput)
    employees?: EmployeeOrderByRelationAggregateInput;
}
