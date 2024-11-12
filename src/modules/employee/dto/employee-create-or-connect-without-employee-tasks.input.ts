import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeeCreateWithoutEmployeeTasksInput } from './employee-create-without-employee-tasks.input';

@InputType()
export class EmployeeCreateOrConnectWithoutEmployeeTasksInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId_workshopId'>;

    @Field(() => EmployeeCreateWithoutEmployeeTasksInput, {nullable:false})
    @Type(() => EmployeeCreateWithoutEmployeeTasksInput)
    create!: EmployeeCreateWithoutEmployeeTasksInput;
}
