import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutPermissionsInput } from './employee-create-without-permissions.input';
import { HideField } from '@nestjs/graphql';
import { EmployeeCreateOrConnectWithoutPermissionsInput } from './employee-create-or-connect-without-permissions.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class EmployeeCreateNestedManyWithoutPermissionsInput {

    @HideField()
    create?: Array<EmployeeCreateWithoutPermissionsInput>;

    @HideField()
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutPermissionsInput>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>>;
}
