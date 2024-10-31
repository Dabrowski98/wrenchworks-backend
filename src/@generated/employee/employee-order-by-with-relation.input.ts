import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PermissionSetOrderByWithRelationInput } from '../permission-set/permission-set-order-by-with-relation.input';
import { WorkshopOrderByWithRelationInput } from '../workshop/workshop-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { PersonOrderByWithRelationInput } from '../person/person-order-by-with-relation.input';
import { ServiceOrderByRelationAggregateInput } from '../service/service-order-by-relation-aggregate.input';
import { EmployeeTaskOrderByRelationAggregateInput } from '../employee-task/employee-task-order-by-relation-aggregate.input';

@InputType()
export class EmployeeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    joinedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    deletedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    permissionSetId?: SortOrderInput;

    @Field(() => PermissionSetOrderByWithRelationInput, {nullable:true})
    permissionSet?: PermissionSetOrderByWithRelationInput;

    @Field(() => WorkshopOrderByWithRelationInput, {nullable:true})
    @Type(() => WorkshopOrderByWithRelationInput)
    workshop?: WorkshopOrderByWithRelationInput;

    @Field(() => PersonOrderByWithRelationInput, {nullable:true})
    @Type(() => PersonOrderByWithRelationInput)
    person?: PersonOrderByWithRelationInput;

    @Field(() => ServiceOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ServiceOrderByRelationAggregateInput)
    services?: ServiceOrderByRelationAggregateInput;

    @Field(() => EmployeeTaskOrderByRelationAggregateInput, {nullable:true})
    @Type(() => EmployeeTaskOrderByRelationAggregateInput)
    employeeTasks?: EmployeeTaskOrderByRelationAggregateInput;
}
