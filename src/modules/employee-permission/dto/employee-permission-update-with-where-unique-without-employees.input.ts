import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeePermissionWhereUniqueInput } from './employee-permission-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeePermissionUpdateWithoutEmployeesInput } from './employee-permission-update-without-employees.input';

@InputType()
export class EmployeePermissionUpdateWithWhereUniqueWithoutEmployeesInput {

    @Field(() => EmployeePermissionWhereUniqueInput, {nullable:false})
    @Type(() => EmployeePermissionWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeePermissionWhereUniqueInput, 'permissionId' | 'name'>;

    @Field(() => EmployeePermissionUpdateWithoutEmployeesInput, {nullable:false})
    @Type(() => EmployeePermissionUpdateWithoutEmployeesInput)
    data!: EmployeePermissionUpdateWithoutEmployeesInput;
}
