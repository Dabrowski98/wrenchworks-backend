import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { ServiceUncheckedCreateNestedManyWithoutEmployeeInput } from '../../service/dto/service-unchecked-create-nested-many-without-employee.input';
import { Type } from 'class-transformer';
import { EmployeeTaskUncheckedCreateNestedManyWithoutEmployeeInput } from '../../employee-task/dto/employee-task-unchecked-create-nested-many-without-employee.input';

@InputType()
export class EmployeeUncheckedCreateWithoutWorkshopInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    employeeId!: bigint | number;

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Joined at must be a valid date' })
    joinedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    @Validator.IsNumber({}, { message: 'Permission set ID must be a number' })
    permissionSetId?: number;

    @Field(() => ServiceUncheckedCreateNestedManyWithoutEmployeeInput, {nullable:true})
    @Type(() => ServiceUncheckedCreateNestedManyWithoutEmployeeInput)
    services?: ServiceUncheckedCreateNestedManyWithoutEmployeeInput;

    @Field(() => EmployeeTaskUncheckedCreateNestedManyWithoutEmployeeInput, {nullable:true})
    @Type(() => EmployeeTaskUncheckedCreateNestedManyWithoutEmployeeInput)
    employeeTasks?: EmployeeTaskUncheckedCreateNestedManyWithoutEmployeeInput;
}
