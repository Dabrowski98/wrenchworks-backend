import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutUserInput } from './employee-create-without-user.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { EmployeeCreateOrConnectWithoutUserInput } from './employee-create-or-connect-without-user.input';
import { EmployeeCreateManyUserInputEnvelope } from './employee-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [EmployeeCreateWithoutUserInput], {nullable:true})
    @Type(() => EmployeeCreateWithoutUserInput)
    @ValidateNested()
    create?: Array<EmployeeCreateWithoutUserInput>;

    @Field(() => [EmployeeCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutUserInput)
    @ValidateNested()
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutUserInput>;

    @Field(() => EmployeeCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => EmployeeCreateManyUserInputEnvelope)
    @ValidateNested()
    createMany?: EmployeeCreateManyUserInputEnvelope;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>>;
}
