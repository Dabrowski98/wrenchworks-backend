import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeeTaskWhereUniqueInput } from './employee-task-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneEmployeeTaskArgs {

    @Field(() => EmployeeTaskWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeTaskWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeTaskWhereUniqueInput, 'employeeId_taskId_workshopId'>;
}
