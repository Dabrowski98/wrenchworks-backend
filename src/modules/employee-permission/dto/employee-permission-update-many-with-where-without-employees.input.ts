import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeePermissionScalarWhereInput } from './employee-permission-scalar-where.input';
import { Type } from 'class-transformer';
import { EmployeePermissionUpdateManyMutationInput } from './employee-permission-update-many-mutation.input';

@InputType()
export class EmployeePermissionUpdateManyWithWhereWithoutEmployeesInput {

    @Field(() => EmployeePermissionScalarWhereInput, {nullable:false})
    @Type(() => EmployeePermissionScalarWhereInput)
    where!: EmployeePermissionScalarWhereInput;

    @Field(() => EmployeePermissionUpdateManyMutationInput, {nullable:false})
    @Type(() => EmployeePermissionUpdateManyMutationInput)
    data!: EmployeePermissionUpdateManyMutationInput;
}
