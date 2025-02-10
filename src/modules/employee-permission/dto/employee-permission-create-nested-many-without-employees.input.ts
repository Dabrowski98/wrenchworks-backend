import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeePermissionCreateWithoutEmployeesInput } from './employee-permission-create-without-employees.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { EmployeePermissionCreateOrConnectWithoutEmployeesInput } from './employee-permission-create-or-connect-without-employees.input';
import { Prisma } from '@prisma/client';
import { EmployeePermissionWhereUniqueInput } from './employee-permission-where-unique.input';

@InputType()
export class EmployeePermissionCreateNestedManyWithoutEmployeesInput {

    @Field(() => [EmployeePermissionCreateWithoutEmployeesInput], {nullable:true})
    @Type(() => EmployeePermissionCreateWithoutEmployeesInput)
    @ValidateNested()
    create?: Array<EmployeePermissionCreateWithoutEmployeesInput>;

    @Field(() => [EmployeePermissionCreateOrConnectWithoutEmployeesInput], {nullable:true})
    @Type(() => EmployeePermissionCreateOrConnectWithoutEmployeesInput)
    @ValidateNested()
    connectOrCreate?: Array<EmployeePermissionCreateOrConnectWithoutEmployeesInput>;

    @Field(() => [EmployeePermissionWhereUniqueInput], {nullable:true})
    @Type(() => EmployeePermissionWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<EmployeePermissionWhereUniqueInput, 'permissionId' | 'name'>>;
}
