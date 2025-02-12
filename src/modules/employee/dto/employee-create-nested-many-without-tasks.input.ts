import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutTasksInput } from './employee-create-without-tasks.input';
import { HideField } from '@nestjs/graphql';
import { EmployeeCreateOrConnectWithoutTasksInput } from './employee-create-or-connect-without-tasks.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class EmployeeCreateNestedManyWithoutTasksInput {

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>>;
}