import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServiceUncheckedCreateNestedManyWithoutEmployeeInput } from '../service/service-unchecked-create-nested-many-without-employee.input';
import { Type } from 'class-transformer';

@InputType()
export class EmployeeUncheckedCreateWithoutEmployeeTasksInput {

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

    @Field(() => ServiceUncheckedCreateNestedManyWithoutEmployeeInput, {nullable:true})
    @Type(() => ServiceUncheckedCreateNestedManyWithoutEmployeeInput)
    services?: ServiceUncheckedCreateNestedManyWithoutEmployeeInput;
}
