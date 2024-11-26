import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutPermissionSetInput } from './employee-create-without-permission-set.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { EmployeeCreateOrConnectWithoutPermissionSetInput } from './employee-create-or-connect-without-permission-set.input';
import { EmployeeCreateManyPermissionSetInputEnvelope } from './employee-create-many-permission-set-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeUncheckedCreateNestedManyWithoutPermissionSetInput {

    @Field(() => [EmployeeCreateWithoutPermissionSetInput], {nullable:true})
    @Type(() => EmployeeCreateWithoutPermissionSetInput)
    @ValidateNested()
    create?: Array<EmployeeCreateWithoutPermissionSetInput>;

    @Field(() => [EmployeeCreateOrConnectWithoutPermissionSetInput], {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutPermissionSetInput)
    @ValidateNested()
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutPermissionSetInput>;

    @Field(() => EmployeeCreateManyPermissionSetInputEnvelope, {nullable:true})
    @Type(() => EmployeeCreateManyPermissionSetInputEnvelope)
    @ValidateNested()
    createMany?: EmployeeCreateManyPermissionSetInputEnvelope;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>>;
}
