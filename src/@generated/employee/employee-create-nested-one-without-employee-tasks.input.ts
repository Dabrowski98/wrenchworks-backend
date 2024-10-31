import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutEmployeeTasksInput } from './employee-create-without-employee-tasks.input';
import { Type } from 'class-transformer';
import { EmployeeCreateOrConnectWithoutEmployeeTasksInput } from './employee-create-or-connect-without-employee-tasks.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeCreateNestedOneWithoutEmployeeTasksInput {

    @Field(() => EmployeeCreateWithoutEmployeeTasksInput, {nullable:true})
    @Type(() => EmployeeCreateWithoutEmployeeTasksInput)
    create?: EmployeeCreateWithoutEmployeeTasksInput;

    @Field(() => EmployeeCreateOrConnectWithoutEmployeeTasksInput, {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutEmployeeTasksInput)
    connectOrCreate?: EmployeeCreateOrConnectWithoutEmployeeTasksInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    connect?: Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId_workshopId'>;
}
