import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { PermissionSetCreateNestedOneWithoutEmployeesInput } from '../../permission-set/dto/permission-set-create-nested-one-without-employees.input';
import { WorkshopCreateNestedOneWithoutEmployeesInput } from '../../workshop/dto/workshop-create-nested-one-without-employees.input';
import { Type } from 'class-transformer';
import { PersonCreateNestedOneWithoutEmployeesInput } from '../../person/dto/person-create-nested-one-without-employees.input';
import { ServiceCreateNestedManyWithoutEmployeeInput } from '../../service/dto/service-create-nested-many-without-employee.input';
import { EmployeeTaskCreateNestedManyWithoutEmployeeInput } from '../../employee-task/dto/employee-task-create-nested-many-without-employee.input';
import { GraphQLBigInt } from 'graphql-scalars';

@InputType()
export class EmployeeCreateInput {

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Joined at must be a valid date' })
    joinedAt?: Date | string;

    @Field(() => PermissionSetCreateNestedOneWithoutEmployeesInput, {nullable:true})
    permissionSet?: PermissionSetCreateNestedOneWithoutEmployeesInput;

    @Field(() => GraphQLBigInt, { nullable: false })
    @Validator.IsNotEmpty({ message: 'Workshop ID is required' })
    workshopId!: bigint | number;

    @Field(() => PersonCreateNestedOneWithoutEmployeesInput, {nullable:false})
    @Type(() => PersonCreateNestedOneWithoutEmployeesInput)
    person!: PersonCreateNestedOneWithoutEmployeesInput;
}
