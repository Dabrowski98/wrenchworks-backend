import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutTasksInput } from './employee-create-without-tasks.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { EmployeeCreateOrConnectWithoutTasksInput } from './employee-create-or-connect-without-tasks.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeUncheckedCreateNestedManyWithoutTasksInput {

    @Field(() => [EmployeeCreateWithoutTasksInput], {nullable:true})
    @Type(() => EmployeeCreateWithoutTasksInput)
    @ValidateNested()
    create?: Array<EmployeeCreateWithoutTasksInput>;

    @Field(() => [EmployeeCreateOrConnectWithoutTasksInput], {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutTasksInput)
    @ValidateNested()
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutTasksInput>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>>;
}
