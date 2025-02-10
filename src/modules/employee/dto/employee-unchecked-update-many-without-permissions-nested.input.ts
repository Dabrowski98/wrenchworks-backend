import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutPermissionsInput } from './employee-create-without-permissions.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { EmployeeCreateOrConnectWithoutPermissionsInput } from './employee-create-or-connect-without-permissions.input';
import { EmployeeUpsertWithWhereUniqueWithoutPermissionsInput } from './employee-upsert-with-where-unique-without-permissions.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithWhereUniqueWithoutPermissionsInput } from './employee-update-with-where-unique-without-permissions.input';
import { EmployeeUpdateManyWithWhereWithoutPermissionsInput } from './employee-update-many-with-where-without-permissions.input';
import { EmployeeScalarWhereInput } from './employee-scalar-where.input';

@InputType()
export class EmployeeUncheckedUpdateManyWithoutPermissionsNestedInput {

    @Field(() => [EmployeeCreateWithoutPermissionsInput], {nullable:true})
    @Type(() => EmployeeCreateWithoutPermissionsInput)
    @ValidateNested()
    create?: Array<EmployeeCreateWithoutPermissionsInput>;

    @Field(() => [EmployeeCreateOrConnectWithoutPermissionsInput], {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutPermissionsInput)
    @ValidateNested()
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutPermissionsInput>;

    @Field(() => [EmployeeUpsertWithWhereUniqueWithoutPermissionsInput], {nullable:true})
    @Type(() => EmployeeUpsertWithWhereUniqueWithoutPermissionsInput)
    @ValidateNested()
    upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutPermissionsInput>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    @ValidateNested()
    set?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    @ValidateNested()
    disconnect?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    @ValidateNested()
    delete?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>>;

    @Field(() => [EmployeeUpdateWithWhereUniqueWithoutPermissionsInput], {nullable:true})
    @Type(() => EmployeeUpdateWithWhereUniqueWithoutPermissionsInput)
    @ValidateNested()
    update?: Array<EmployeeUpdateWithWhereUniqueWithoutPermissionsInput>;

    @Field(() => [EmployeeUpdateManyWithWhereWithoutPermissionsInput], {nullable:true})
    @Type(() => EmployeeUpdateManyWithWhereWithoutPermissionsInput)
    @ValidateNested()
    updateMany?: Array<EmployeeUpdateManyWithWhereWithoutPermissionsInput>;

    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    @Type(() => EmployeeScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<EmployeeScalarWhereInput>;
}
