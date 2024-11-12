import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutEmployeeTasksInput } from './employee-create-without-employee-tasks.input';
import { Type } from 'class-transformer';
import { EmployeeCreateOrConnectWithoutEmployeeTasksInput } from './employee-create-or-connect-without-employee-tasks.input';
import { EmployeeUpsertWithoutEmployeeTasksInput } from './employee-upsert-without-employee-tasks.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateToOneWithWhereWithoutEmployeeTasksInput } from './employee-update-to-one-with-where-without-employee-tasks.input';

@InputType()
export class EmployeeUpdateOneRequiredWithoutEmployeeTasksNestedInput {

    @Field(() => EmployeeCreateWithoutEmployeeTasksInput, {nullable:true})
    @Type(() => EmployeeCreateWithoutEmployeeTasksInput)
    create?: EmployeeCreateWithoutEmployeeTasksInput;

    @Field(() => EmployeeCreateOrConnectWithoutEmployeeTasksInput, {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutEmployeeTasksInput)
    connectOrCreate?: EmployeeCreateOrConnectWithoutEmployeeTasksInput;

    @Field(() => EmployeeUpsertWithoutEmployeeTasksInput, {nullable:true})
    @Type(() => EmployeeUpsertWithoutEmployeeTasksInput)
    upsert?: EmployeeUpsertWithoutEmployeeTasksInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    connect?: Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId_workshopId'>;

    @Field(() => EmployeeUpdateToOneWithWhereWithoutEmployeeTasksInput, {nullable:true})
    @Type(() => EmployeeUpdateToOneWithWhereWithoutEmployeeTasksInput)
    update?: EmployeeUpdateToOneWithWhereWithoutEmployeeTasksInput;
}
