import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeTaskUpdateInput } from './employee-task-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { EmployeeTaskWhereUniqueInput } from './employee-task-where-unique.input';
import * as Validator from 'class-validator';

@ArgsType()
export class UpdateOneEmployeeTaskArgs {

    @Field(() => EmployeeTaskUpdateInput, {nullable:false})
    @Type(() => EmployeeTaskUpdateInput)
    @Validator.ValidateNested()
    data!: EmployeeTaskUpdateInput;

    @Field(() => EmployeeTaskWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeTaskWhereUniqueInput)
    @Validator.Allow()
    where!: Prisma.AtLeast<EmployeeTaskWhereUniqueInput, 'employeeId_taskId_workshopId'>;
}
