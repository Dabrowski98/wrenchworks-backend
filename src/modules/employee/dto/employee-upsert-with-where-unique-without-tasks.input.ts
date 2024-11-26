import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeeUpdateWithoutTasksInput } from './employee-update-without-tasks.input';
import { ValidateNested } from 'class-validator';
import { EmployeeCreateWithoutTasksInput } from './employee-create-without-tasks.input';

@InputType()
export class EmployeeUpsertWithWhereUniqueWithoutTasksInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>;

    @Field(() => EmployeeUpdateWithoutTasksInput, {nullable:false})
    @Type(() => EmployeeUpdateWithoutTasksInput)
    @ValidateNested()
    update!: EmployeeUpdateWithoutTasksInput;

    @Field(() => EmployeeCreateWithoutTasksInput, {nullable:false})
    @Type(() => EmployeeCreateWithoutTasksInput)
    @ValidateNested()
    create!: EmployeeCreateWithoutTasksInput;
}
