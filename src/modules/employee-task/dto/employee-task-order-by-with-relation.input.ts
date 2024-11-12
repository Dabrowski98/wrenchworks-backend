import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { EmployeeOrderByWithRelationInput } from '../../employee/dto/employee-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { TaskOrderByWithRelationInput } from '../../task/dto/task-order-by-with-relation.input';

@InputType()
export class EmployeeTaskOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    taskId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => EmployeeOrderByWithRelationInput, {nullable:true})
    @Type(() => EmployeeOrderByWithRelationInput)
    employee?: EmployeeOrderByWithRelationInput;

    @Field(() => TaskOrderByWithRelationInput, {nullable:true})
    @Type(() => TaskOrderByWithRelationInput)
    Task?: TaskOrderByWithRelationInput;
}
