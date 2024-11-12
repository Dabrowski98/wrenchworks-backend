import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { ServiceUncheckedUpdateManyWithoutEmployeeNestedInput } from '../../service/dto/service-unchecked-update-many-without-employee-nested.input';
import { Type } from 'class-transformer';
import { EmployeeTaskUncheckedUpdateManyWithoutEmployeeNestedInput } from '../../employee-task/dto/employee-task-unchecked-update-many-without-employee-nested.input';

@InputType()
export class EmployeeUncheckedUpdateInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    employeeId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Joined at must be a valid date' })
    joinedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    @Validator.IsNumber({}, { message: 'Permission set ID must be a number' })
    permissionSetId?: number;

    @Field(() => ServiceUncheckedUpdateManyWithoutEmployeeNestedInput, {nullable:true})
    @Type(() => ServiceUncheckedUpdateManyWithoutEmployeeNestedInput)
    services?: ServiceUncheckedUpdateManyWithoutEmployeeNestedInput;

    @Field(() => EmployeeTaskUncheckedUpdateManyWithoutEmployeeNestedInput, {nullable:true})
    @Type(() => EmployeeTaskUncheckedUpdateManyWithoutEmployeeNestedInput)
    employeeTasks?: EmployeeTaskUncheckedUpdateManyWithoutEmployeeNestedInput;
}
