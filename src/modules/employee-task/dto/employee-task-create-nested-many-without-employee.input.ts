import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeTaskCreateWithoutEmployeeInput } from './employee-task-create-without-employee.input';
import { Type } from 'class-transformer';
import { EmployeeTaskCreateOrConnectWithoutEmployeeInput } from './employee-task-create-or-connect-without-employee.input';
import { EmployeeTaskCreateManyEmployeeInputEnvelope } from './employee-task-create-many-employee-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EmployeeTaskWhereUniqueInput } from './employee-task-where-unique.input';

@InputType()
export class EmployeeTaskCreateNestedManyWithoutEmployeeInput {

    @Field(() => [EmployeeTaskCreateWithoutEmployeeInput], {nullable:true})
    @Type(() => EmployeeTaskCreateWithoutEmployeeInput)
    create?: Array<EmployeeTaskCreateWithoutEmployeeInput>;

    @Field(() => [EmployeeTaskCreateOrConnectWithoutEmployeeInput], {nullable:true})
    @Type(() => EmployeeTaskCreateOrConnectWithoutEmployeeInput)
    connectOrCreate?: Array<EmployeeTaskCreateOrConnectWithoutEmployeeInput>;

    @Field(() => EmployeeTaskCreateManyEmployeeInputEnvelope, {nullable:true})
    @Type(() => EmployeeTaskCreateManyEmployeeInputEnvelope)
    createMany?: EmployeeTaskCreateManyEmployeeInputEnvelope;

    @Field(() => [EmployeeTaskWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeTaskWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EmployeeTaskWhereUniqueInput, 'employeeId_taskId_workshopId'>>;
}
