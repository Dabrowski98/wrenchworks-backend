import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutUserInput } from './employee-create-without-user.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { EmployeeCreateOrConnectWithoutUserInput } from './employee-create-or-connect-without-user.input';
import { EmployeeUpsertWithWhereUniqueWithoutUserInput } from './employee-upsert-with-where-unique-without-user.input';
import { EmployeeCreateManyUserInputEnvelope } from './employee-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithWhereUniqueWithoutUserInput } from './employee-update-with-where-unique-without-user.input';
import { EmployeeUpdateManyWithWhereWithoutUserInput } from './employee-update-many-with-where-without-user.input';
import { EmployeeScalarWhereInput } from './employee-scalar-where.input';

@InputType()
export class EmployeeUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [EmployeeCreateWithoutUserInput], {nullable:true})
    @Type(() => EmployeeCreateWithoutUserInput)
    @ValidateNested()
    create?: Array<EmployeeCreateWithoutUserInput>;

    @Field(() => [EmployeeCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutUserInput)
    @ValidateNested()
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutUserInput>;

    @Field(() => [EmployeeUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => EmployeeUpsertWithWhereUniqueWithoutUserInput)
    @ValidateNested()
    upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => EmployeeCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => EmployeeCreateManyUserInputEnvelope)
    @ValidateNested()
    createMany?: EmployeeCreateManyUserInputEnvelope;

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

    @Field(() => [EmployeeUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => EmployeeUpdateWithWhereUniqueWithoutUserInput)
    @ValidateNested()
    update?: Array<EmployeeUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [EmployeeUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => EmployeeUpdateManyWithWhereWithoutUserInput)
    @ValidateNested()
    updateMany?: Array<EmployeeUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    @Type(() => EmployeeScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<EmployeeScalarWhereInput>;
}
