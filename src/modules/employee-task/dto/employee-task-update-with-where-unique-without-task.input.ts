import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeeTaskWhereUniqueInput } from './employee-task-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeeTaskUpdateWithoutTaskInput } from './employee-task-update-without-task.input';

@InputType()
export class EmployeeTaskUpdateWithWhereUniqueWithoutTaskInput {

    @Field(() => EmployeeTaskWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeTaskWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeTaskWhereUniqueInput, 'employeeId_taskId_workshopId'>;

    @Field(() => EmployeeTaskUpdateWithoutTaskInput, {nullable:false})
    @Type(() => EmployeeTaskUpdateWithoutTaskInput)
    data!: EmployeeTaskUpdateWithoutTaskInput;
}
