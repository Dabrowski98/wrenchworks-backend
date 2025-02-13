import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutServicesInput } from './employee-create-without-services.input';
import { HideField } from '@nestjs/graphql';
import { EmployeeCreateOrConnectWithoutServicesInput } from './employee-create-or-connect-without-services.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class EmployeeCreateNestedOneWithoutServicesInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>;
}