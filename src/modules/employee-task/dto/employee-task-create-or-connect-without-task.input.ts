import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeeTaskWhereUniqueInput } from './employee-task-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeeTaskCreateWithoutTaskInput } from './employee-task-create-without-task.input';

@InputType()
export class EmployeeTaskCreateOrConnectWithoutTaskInput {

    @Field(() => EmployeeTaskWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeTaskWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeTaskWhereUniqueInput, 'employeeId_taskId_workshopId'>;

    @Field(() => EmployeeTaskCreateWithoutTaskInput, {nullable:false})
    @Type(() => EmployeeTaskCreateWithoutTaskInput)
    create!: EmployeeTaskCreateWithoutTaskInput;
}
