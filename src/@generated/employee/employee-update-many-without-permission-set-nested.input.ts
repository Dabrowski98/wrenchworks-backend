import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutPermissionSetInput } from './employee-create-without-permission-set.input';
import { Type } from 'class-transformer';
import { EmployeeCreateOrConnectWithoutPermissionSetInput } from './employee-create-or-connect-without-permission-set.input';
import { EmployeeUpsertWithWhereUniqueWithoutPermissionSetInput } from './employee-upsert-with-where-unique-without-permission-set.input';
import { EmployeeCreateManyPermissionSetInputEnvelope } from './employee-create-many-permission-set-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithWhereUniqueWithoutPermissionSetInput } from './employee-update-with-where-unique-without-permission-set.input';
import { EmployeeUpdateManyWithWhereWithoutPermissionSetInput } from './employee-update-many-with-where-without-permission-set.input';
import { EmployeeScalarWhereInput } from './employee-scalar-where.input';

@InputType()
export class EmployeeUpdateManyWithoutPermissionSetNestedInput {

    @Field(() => [EmployeeCreateWithoutPermissionSetInput], {nullable:true})
    @Type(() => EmployeeCreateWithoutPermissionSetInput)
    create?: Array<EmployeeCreateWithoutPermissionSetInput>;

    @Field(() => [EmployeeCreateOrConnectWithoutPermissionSetInput], {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutPermissionSetInput)
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutPermissionSetInput>;

    @Field(() => [EmployeeUpsertWithWhereUniqueWithoutPermissionSetInput], {nullable:true})
    @Type(() => EmployeeUpsertWithWhereUniqueWithoutPermissionSetInput)
    upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutPermissionSetInput>;

    @Field(() => EmployeeCreateManyPermissionSetInputEnvelope, {nullable:true})
    @Type(() => EmployeeCreateManyPermissionSetInputEnvelope)
    createMany?: EmployeeCreateManyPermissionSetInputEnvelope;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId_workshopId'>>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId_workshopId'>>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId_workshopId'>>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId_workshopId'>>;

    @Field(() => [EmployeeUpdateWithWhereUniqueWithoutPermissionSetInput], {nullable:true})
    @Type(() => EmployeeUpdateWithWhereUniqueWithoutPermissionSetInput)
    update?: Array<EmployeeUpdateWithWhereUniqueWithoutPermissionSetInput>;

    @Field(() => [EmployeeUpdateManyWithWhereWithoutPermissionSetInput], {nullable:true})
    @Type(() => EmployeeUpdateManyWithWhereWithoutPermissionSetInput)
    updateMany?: Array<EmployeeUpdateManyWithWhereWithoutPermissionSetInput>;

    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    @Type(() => EmployeeScalarWhereInput)
    deleteMany?: Array<EmployeeScalarWhereInput>;
}
