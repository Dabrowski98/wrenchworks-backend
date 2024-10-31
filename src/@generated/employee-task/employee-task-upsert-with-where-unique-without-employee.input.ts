import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeeTaskWhereUniqueInput } from './employee-task-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeeTaskUpdateWithoutEmployeeInput } from './employee-task-update-without-employee.input';
import { EmployeeTaskCreateWithoutEmployeeInput } from './employee-task-create-without-employee.input';

@InputType()
export class EmployeeTaskUpsertWithWhereUniqueWithoutEmployeeInput {

    @Field(() => EmployeeTaskWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeTaskWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeTaskWhereUniqueInput, 'employeeId_taskId_workshopId'>;

    @Field(() => EmployeeTaskUpdateWithoutEmployeeInput, {nullable:false})
    @Type(() => EmployeeTaskUpdateWithoutEmployeeInput)
    update!: EmployeeTaskUpdateWithoutEmployeeInput;

    @Field(() => EmployeeTaskCreateWithoutEmployeeInput, {nullable:false})
    @Type(() => EmployeeTaskCreateWithoutEmployeeInput)
    create!: EmployeeTaskCreateWithoutEmployeeInput;
}
