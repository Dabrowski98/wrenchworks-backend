import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeePermissionCreateWithoutEmployeesInput } from './employee-permission-create-without-employees.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { EmployeePermissionCreateOrConnectWithoutEmployeesInput } from './employee-permission-create-or-connect-without-employees.input';
import { EmployeePermissionUpsertWithWhereUniqueWithoutEmployeesInput } from './employee-permission-upsert-with-where-unique-without-employees.input';
import { Prisma } from '@prisma/client';
import { EmployeePermissionWhereUniqueInput } from './employee-permission-where-unique.input';
import { EmployeePermissionUpdateWithWhereUniqueWithoutEmployeesInput } from './employee-permission-update-with-where-unique-without-employees.input';
import { EmployeePermissionUpdateManyWithWhereWithoutEmployeesInput } from './employee-permission-update-many-with-where-without-employees.input';
import { EmployeePermissionScalarWhereInput } from './employee-permission-scalar-where.input';

@InputType()
export class EmployeePermissionUpdateManyWithoutEmployeesNestedInput {

    @Field(() => [EmployeePermissionCreateWithoutEmployeesInput], {nullable:true})
    @Type(() => EmployeePermissionCreateWithoutEmployeesInput)
    @ValidateNested()
    create?: Array<EmployeePermissionCreateWithoutEmployeesInput>;

    @Field(() => [EmployeePermissionCreateOrConnectWithoutEmployeesInput], {nullable:true})
    @Type(() => EmployeePermissionCreateOrConnectWithoutEmployeesInput)
    @ValidateNested()
    connectOrCreate?: Array<EmployeePermissionCreateOrConnectWithoutEmployeesInput>;

    @Field(() => [EmployeePermissionUpsertWithWhereUniqueWithoutEmployeesInput], {nullable:true})
    @Type(() => EmployeePermissionUpsertWithWhereUniqueWithoutEmployeesInput)
    @ValidateNested()
    upsert?: Array<EmployeePermissionUpsertWithWhereUniqueWithoutEmployeesInput>;

    @Field(() => [EmployeePermissionWhereUniqueInput], {nullable:true})
    @Type(() => EmployeePermissionWhereUniqueInput)
    @ValidateNested()
    set?: Array<Prisma.AtLeast<EmployeePermissionWhereUniqueInput, 'permissionId' | 'name'>>;

    @Field(() => [EmployeePermissionWhereUniqueInput], {nullable:true})
    @Type(() => EmployeePermissionWhereUniqueInput)
    @ValidateNested()
    disconnect?: Array<Prisma.AtLeast<EmployeePermissionWhereUniqueInput, 'permissionId' | 'name'>>;

    @Field(() => [EmployeePermissionWhereUniqueInput], {nullable:true})
    @Type(() => EmployeePermissionWhereUniqueInput)
    @ValidateNested()
    delete?: Array<Prisma.AtLeast<EmployeePermissionWhereUniqueInput, 'permissionId' | 'name'>>;

    @Field(() => [EmployeePermissionWhereUniqueInput], {nullable:true})
    @Type(() => EmployeePermissionWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<EmployeePermissionWhereUniqueInput, 'permissionId' | 'name'>>;

    @Field(() => [EmployeePermissionUpdateWithWhereUniqueWithoutEmployeesInput], {nullable:true})
    @Type(() => EmployeePermissionUpdateWithWhereUniqueWithoutEmployeesInput)
    @ValidateNested()
    update?: Array<EmployeePermissionUpdateWithWhereUniqueWithoutEmployeesInput>;

    @Field(() => [EmployeePermissionUpdateManyWithWhereWithoutEmployeesInput], {nullable:true})
    @Type(() => EmployeePermissionUpdateManyWithWhereWithoutEmployeesInput)
    @ValidateNested()
    updateMany?: Array<EmployeePermissionUpdateManyWithWhereWithoutEmployeesInput>;

    @Field(() => [EmployeePermissionScalarWhereInput], {nullable:true})
    @Type(() => EmployeePermissionScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<EmployeePermissionScalarWhereInput>;
}
