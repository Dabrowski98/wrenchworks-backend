import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeeCreateWithoutTasksInput } from './employee-create-without-tasks.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class EmployeeCreateOrConnectWithoutTasksInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>;

    @Field(() => EmployeeCreateWithoutTasksInput, {nullable:false})
    @Type(() => EmployeeCreateWithoutTasksInput)
    @ValidateNested()
    create!: EmployeeCreateWithoutTasksInput;
}
