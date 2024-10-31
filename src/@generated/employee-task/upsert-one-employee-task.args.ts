import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeeTaskWhereUniqueInput } from './employee-task-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeeTaskCreateInput } from './employee-task-create.input';
import { EmployeeTaskUpdateInput } from './employee-task-update.input';

@ArgsType()
export class UpsertOneEmployeeTaskArgs {

    @Field(() => EmployeeTaskWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeTaskWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeTaskWhereUniqueInput, 'employeeId_taskId_workshopId'>;

    @Field(() => EmployeeTaskCreateInput, {nullable:false})
    @Type(() => EmployeeTaskCreateInput)
    create!: EmployeeTaskCreateInput;

    @Field(() => EmployeeTaskUpdateInput, {nullable:false})
    @Type(() => EmployeeTaskUpdateInput)
    update!: EmployeeTaskUpdateInput;
}
