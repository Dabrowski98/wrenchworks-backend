import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutPermissionsInput } from './employee-create-without-permissions.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { EmployeeCreateOrConnectWithoutPermissionsInput } from './employee-create-or-connect-without-permissions.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeUncheckedCreateNestedManyWithoutPermissionsInput {

    @Field(() => [EmployeeCreateWithoutPermissionsInput], {nullable:true})
    @Type(() => EmployeeCreateWithoutPermissionsInput)
    @ValidateNested()
    create?: Array<EmployeeCreateWithoutPermissionsInput>;

    @Field(() => [EmployeeCreateOrConnectWithoutPermissionsInput], {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutPermissionsInput)
    @ValidateNested()
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutPermissionsInput>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>>;
}
