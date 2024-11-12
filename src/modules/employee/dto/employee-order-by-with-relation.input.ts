import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { PermissionSetOrderByWithRelationInput } from '../../permission-set/dto/permission-set-order-by-with-relation.input';
import { WorkshopOrderByWithRelationInput } from '../../workshop/dto/workshop-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { PersonOrderByWithRelationInput } from '../../person/dto/person-order-by-with-relation.input';
import { ServiceOrderByRelationAggregateInput } from '../../service/dto/service-order-by-relation-aggregate.input';
import { EmployeeTaskOrderByRelationAggregateInput } from '../../employee-task/dto/employee-task-order-by-relation-aggregate.input';

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
