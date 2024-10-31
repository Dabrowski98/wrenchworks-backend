import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServiceUncheckedCreateNestedManyWithoutEmployeeInput } from '../service/service-unchecked-create-nested-many-without-employee.input';
import { Type } from 'class-transformer';
import { EmployeeTaskUncheckedCreateNestedManyWithoutEmployeeInput } from '../employee-task/employee-task-unchecked-create-nested-many-without-employee.input';

@InputType()
export class EmployeeUncheckedCreateWithoutPermissionSetInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    employeeId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint | number;

    @Field(() => Date, {nullable:true})
    joinedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => ServiceUncheckedCreateNestedManyWithoutEmployeeInput, {nullable:true})
    @Type(() => ServiceUncheckedCreateNestedManyWithoutEmployeeInput)
    services?: ServiceUncheckedCreateNestedManyWithoutEmployeeInput;

    @Field(() => EmployeeTaskUncheckedCreateNestedManyWithoutEmployeeInput, {nullable:true})
    @Type(() => EmployeeTaskUncheckedCreateNestedManyWithoutEmployeeInput)
    employeeTasks?: EmployeeTaskUncheckedCreateNestedManyWithoutEmployeeInput;
}
