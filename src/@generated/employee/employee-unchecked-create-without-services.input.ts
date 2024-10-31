import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { EmployeeTaskUncheckedCreateNestedManyWithoutEmployeeInput } from '../employee-task/employee-task-unchecked-create-nested-many-without-employee.input';
import { Type } from 'class-transformer';

@InputType()
export class EmployeeUncheckedCreateWithoutServicesInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    employeeId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint | number;

    @Field(() => Date, {nullable:true})
    joinedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:true})
    permissionSetId?: bigint | number;

    @Field(() => EmployeeTaskUncheckedCreateNestedManyWithoutEmployeeInput, {nullable:true})
    @Type(() => EmployeeTaskUncheckedCreateNestedManyWithoutEmployeeInput)
    employeeTasks?: EmployeeTaskUncheckedCreateNestedManyWithoutEmployeeInput;
}
