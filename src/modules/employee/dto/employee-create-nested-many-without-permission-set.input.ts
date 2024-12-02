import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutPermissionSetInput } from './employee-create-without-permission-set.input';
import { HideField } from '@nestjs/graphql';
import { EmployeeCreateOrConnectWithoutPermissionSetInput } from './employee-create-or-connect-without-permission-set.input';
import { EmployeeCreateManyPermissionSetInputEnvelope } from './employee-create-many-permission-set-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class EmployeeCreateNestedManyWithoutPermissionSetInput {

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>>;
}