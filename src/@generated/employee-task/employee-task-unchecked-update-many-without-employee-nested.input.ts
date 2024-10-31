import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeTaskCreateWithoutEmployeeInput } from './employee-task-create-without-employee.input';
import { Type } from 'class-transformer';
import { EmployeeTaskCreateOrConnectWithoutEmployeeInput } from './employee-task-create-or-connect-without-employee.input';
import { EmployeeTaskUpsertWithWhereUniqueWithoutEmployeeInput } from './employee-task-upsert-with-where-unique-without-employee.input';
import { EmployeeTaskCreateManyEmployeeInputEnvelope } from './employee-task-create-many-employee-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EmployeeTaskWhereUniqueInput } from './employee-task-where-unique.input';
import { EmployeeTaskUpdateWithWhereUniqueWithoutEmployeeInput } from './employee-task-update-with-where-unique-without-employee.input';
import { EmployeeTaskUpdateManyWithWhereWithoutEmployeeInput } from './employee-task-update-many-with-where-without-employee.input';
import { EmployeeTaskScalarWhereInput } from './employee-task-scalar-where.input';

@InputType()
export class EmployeeTaskUncheckedUpdateManyWithoutEmployeeNestedInput {

    @Field(() => [EmployeeTaskCreateWithoutEmployeeInput], {nullable:true})
    @Type(() => EmployeeTaskCreateWithoutEmployeeInput)
    create?: Array<EmployeeTaskCreateWithoutEmployeeInput>;

    @Field(() => [EmployeeTaskCreateOrConnectWithoutEmployeeInput], {nullable:true})
    @Type(() => EmployeeTaskCreateOrConnectWithoutEmployeeInput)
    connectOrCreate?: Array<EmployeeTaskCreateOrConnectWithoutEmployeeInput>;

    @Field(() => [EmployeeTaskUpsertWithWhereUniqueWithoutEmployeeInput], {nullable:true})
    @Type(() => EmployeeTaskUpsertWithWhereUniqueWithoutEmployeeInput)
    upsert?: Array<EmployeeTaskUpsertWithWhereUniqueWithoutEmployeeInput>;

    @Field(() => EmployeeTaskCreateManyEmployeeInputEnvelope, {nullable:true})
    @Type(() => EmployeeTaskCreateManyEmployeeInputEnvelope)
    createMany?: EmployeeTaskCreateManyEmployeeInputEnvelope;

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

    @Field(() => [EmployeeTaskUpdateWithWhereUniqueWithoutEmployeeInput], {nullable:true})
    @Type(() => EmployeeTaskUpdateWithWhereUniqueWithoutEmployeeInput)
    update?: Array<EmployeeTaskUpdateWithWhereUniqueWithoutEmployeeInput>;

    @Field(() => [EmployeeTaskUpdateManyWithWhereWithoutEmployeeInput], {nullable:true})
    @Type(() => EmployeeTaskUpdateManyWithWhereWithoutEmployeeInput)
    updateMany?: Array<EmployeeTaskUpdateManyWithWhereWithoutEmployeeInput>;

    @Field(() => [EmployeeTaskScalarWhereInput], {nullable:true})
    @Type(() => EmployeeTaskScalarWhereInput)
    deleteMany?: Array<EmployeeTaskScalarWhereInput>;
}
