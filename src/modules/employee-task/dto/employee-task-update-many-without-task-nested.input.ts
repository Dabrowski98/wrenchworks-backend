import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeTaskCreateWithoutTaskInput } from './employee-task-create-without-task.input';
import { Type } from 'class-transformer';
import { EmployeeTaskCreateOrConnectWithoutTaskInput } from './employee-task-create-or-connect-without-task.input';
import { EmployeeTaskUpsertWithWhereUniqueWithoutTaskInput } from './employee-task-upsert-with-where-unique-without-task.input';
import { EmployeeTaskCreateManyTaskInputEnvelope } from './employee-task-create-many-task-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EmployeeTaskWhereUniqueInput } from './employee-task-where-unique.input';
import { EmployeeTaskUpdateWithWhereUniqueWithoutTaskInput } from './employee-task-update-with-where-unique-without-task.input';
import { EmployeeTaskUpdateManyWithWhereWithoutTaskInput } from './employee-task-update-many-with-where-without-task.input';
import { EmployeeTaskScalarWhereInput } from './employee-task-scalar-where.input';

@InputType()
export class EmployeeTaskUpdateManyWithoutTaskNestedInput {

    @Field(() => [EmployeeTaskCreateWithoutTaskInput], {nullable:true})
    @Type(() => EmployeeTaskCreateWithoutTaskInput)
    create?: Array<EmployeeTaskCreateWithoutTaskInput>;

    @Field(() => [EmployeeTaskCreateOrConnectWithoutTaskInput], {nullable:true})
    @Type(() => EmployeeTaskCreateOrConnectWithoutTaskInput)
    connectOrCreate?: Array<EmployeeTaskCreateOrConnectWithoutTaskInput>;

    @Field(() => [EmployeeTaskUpsertWithWhereUniqueWithoutTaskInput], {nullable:true})
    @Type(() => EmployeeTaskUpsertWithWhereUniqueWithoutTaskInput)
    upsert?: Array<EmployeeTaskUpsertWithWhereUniqueWithoutTaskInput>;

    @Field(() => EmployeeTaskCreateManyTaskInputEnvelope, {nullable:true})
    @Type(() => EmployeeTaskCreateManyTaskInputEnvelope)
    createMany?: EmployeeTaskCreateManyTaskInputEnvelope;

    @Field(() => [EmployeeTaskWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeTaskWhereUniqueInput)
    set?: Array<Prisma.AtLeast<EmployeeTaskWhereUniqueInput, 'employeeId_taskId_workshopId'>>;

    @Field(() => [EmployeeTaskWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeTaskWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<EmployeeTaskWhereUniqueInput, 'employeeId_taskId_workshopId'>>;

    @Field(() => [EmployeeTaskWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeTaskWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<EmployeeTaskWhereUniqueInput, 'employeeId_taskId_workshopId'>>;

    @Field(() => [EmployeeTaskWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeTaskWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EmployeeTaskWhereUniqueInput, 'employeeId_taskId_workshopId'>>;

    @Field(() => [EmployeeTaskUpdateWithWhereUniqueWithoutTaskInput], {nullable:true})
    @Type(() => EmployeeTaskUpdateWithWhereUniqueWithoutTaskInput)
    update?: Array<EmployeeTaskUpdateWithWhereUniqueWithoutTaskInput>;

    @Field(() => [EmployeeTaskUpdateManyWithWhereWithoutTaskInput], {nullable:true})
    @Type(() => EmployeeTaskUpdateManyWithWhereWithoutTaskInput)
    updateMany?: Array<EmployeeTaskUpdateManyWithWhereWithoutTaskInput>;

    @Field(() => [EmployeeTaskScalarWhereInput], {nullable:true})
    @Type(() => EmployeeTaskScalarWhereInput)
    deleteMany?: Array<EmployeeTaskScalarWhereInput>;
}
