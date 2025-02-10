import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeePermissionWhereUniqueInput } from './employee-permission-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeePermissionCreateWithoutEmployeesInput } from './employee-permission-create-without-employees.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class EmployeePermissionCreateOrConnectWithoutEmployeesInput {

    @Field(() => EmployeePermissionWhereUniqueInput, {nullable:false})
    @Type(() => EmployeePermissionWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeePermissionWhereUniqueInput, 'permissionId' | 'name'>;

    @Field(() => EmployeePermissionCreateWithoutEmployeesInput, {nullable:false})
    @Type(() => EmployeePermissionCreateWithoutEmployeesInput)
    @ValidateNested()
    create!: EmployeePermissionCreateWithoutEmployeesInput;
}
