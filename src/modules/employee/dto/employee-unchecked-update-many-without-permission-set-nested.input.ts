import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutPermissionSetInput } from './employee-create-without-permission-set.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { EmployeeCreateOrConnectWithoutPermissionSetInput } from './employee-create-or-connect-without-permission-set.input';
import { EmployeeUpsertWithWhereUniqueWithoutPermissionSetInput } from './employee-upsert-with-where-unique-without-permission-set.input';
import { EmployeeCreateManyPermissionSetInputEnvelope } from './employee-create-many-permission-set-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithWhereUniqueWithoutPermissionSetInput } from './employee-update-with-where-unique-without-permission-set.input';
import { EmployeeUpdateManyWithWhereWithoutPermissionSetInput } from './employee-update-many-with-where-without-permission-set.input';
import { EmployeeScalarWhereInput } from './employee-scalar-where.input';

@InputType()
export class EmployeeUncheckedUpdateManyWithoutPermissionSetNestedInput {

    @Field(() => [EmployeeCreateWithoutPermissionSetInput], {nullable:true})
    @Type(() => EmployeeCreateWithoutPermissionSetInput)
    @ValidateNested()
    create?: Array<EmployeeCreateWithoutPermissionSetInput>;

    @Field(() => [EmployeeCreateOrConnectWithoutPermissionSetInput], {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutPermissionSetInput)
    @ValidateNested()
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutPermissionSetInput>;

    @Field(() => [EmployeeUpsertWithWhereUniqueWithoutPermissionSetInput], {nullable:true})
    @Type(() => EmployeeUpsertWithWhereUniqueWithoutPermissionSetInput)
    @ValidateNested()
    upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutPermissionSetInput>;

    @Field(() => EmployeeCreateManyPermissionSetInputEnvelope, {nullable:true})
    @Type(() => EmployeeCreateManyPermissionSetInputEnvelope)
    @ValidateNested()
    createMany?: EmployeeCreateManyPermissionSetInputEnvelope;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    @ValidateNested()
    set?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    @ValidateNested()
    disconnect?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    @ValidateNested()
    delete?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>>;

    @Field(() => [EmployeeUpdateWithWhereUniqueWithoutPermissionSetInput], {nullable:true})
    @Type(() => EmployeeUpdateWithWhereUniqueWithoutPermissionSetInput)
    @ValidateNested()
    update?: Array<EmployeeUpdateWithWhereUniqueWithoutPermissionSetInput>;

    @Field(() => [EmployeeUpdateManyWithWhereWithoutPermissionSetInput], {nullable:true})
    @Type(() => EmployeeUpdateManyWithWhereWithoutPermissionSetInput)
    @ValidateNested()
    updateMany?: Array<EmployeeUpdateManyWithWhereWithoutPermissionSetInput>;

    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    @Type(() => EmployeeScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<EmployeeScalarWhereInput>;
}
