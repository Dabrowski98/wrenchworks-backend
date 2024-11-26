import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeeUpdateWithoutTasksInput } from './employee-update-without-tasks.input';

@InputType()
export class EmployeeUpdateWithWhereUniqueWithoutTasksInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>;

    @Field(() => EmployeeUpdateWithoutTasksInput, {nullable:false})
    @Type(() => EmployeeUpdateWithoutTasksInput)
    data!: EmployeeUpdateWithoutTasksInput;
}
