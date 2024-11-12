import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeTaskCreateWithoutTaskInput } from './employee-task-create-without-task.input';
import { Type } from 'class-transformer';
import { EmployeeTaskCreateOrConnectWithoutTaskInput } from './employee-task-create-or-connect-without-task.input';
import { EmployeeTaskCreateManyTaskInputEnvelope } from './employee-task-create-many-task-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EmployeeTaskWhereUniqueInput } from './employee-task-where-unique.input';

@InputType()
export class EmployeeTaskCreateNestedManyWithoutTaskInput {

    @Field(() => [EmployeeTaskCreateWithoutTaskInput], {nullable:true})
    @Type(() => EmployeeTaskCreateWithoutTaskInput)
    create?: Array<EmployeeTaskCreateWithoutTaskInput>;

    @Field(() => [EmployeeTaskCreateOrConnectWithoutTaskInput], {nullable:true})
    @Type(() => EmployeeTaskCreateOrConnectWithoutTaskInput)
    connectOrCreate?: Array<EmployeeTaskCreateOrConnectWithoutTaskInput>;

    @Field(() => EmployeeTaskCreateManyTaskInputEnvelope, {nullable:true})
    @Type(() => EmployeeTaskCreateManyTaskInputEnvelope)
    createMany?: EmployeeTaskCreateManyTaskInputEnvelope;

    @Field(() => [EmployeeTaskWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeTaskWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EmployeeTaskWhereUniqueInput, 'employeeId_taskId_workshopId'>>;
}
