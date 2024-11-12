import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeeTaskWhereUniqueInput } from './employee-task-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeeTaskUpdateWithoutTaskInput } from './employee-task-update-without-task.input';
import { EmployeeTaskCreateWithoutTaskInput } from './employee-task-create-without-task.input';

@InputType()
export class EmployeeTaskUpsertWithWhereUniqueWithoutTaskInput {

    @Field(() => EmployeeTaskWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeTaskWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeTaskWhereUniqueInput, 'employeeId_taskId_workshopId'>;

    @Field(() => EmployeeTaskUpdateWithoutTaskInput, {nullable:false})
    @Type(() => EmployeeTaskUpdateWithoutTaskInput)
    update!: EmployeeTaskUpdateWithoutTaskInput;

    @Field(() => EmployeeTaskCreateWithoutTaskInput, {nullable:false})
    @Type(() => EmployeeTaskCreateWithoutTaskInput)
    create!: EmployeeTaskCreateWithoutTaskInput;
}
