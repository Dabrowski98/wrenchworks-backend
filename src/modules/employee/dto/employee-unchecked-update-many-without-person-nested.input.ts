import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutPersonInput } from './employee-create-without-person.input';
import { Type } from 'class-transformer';
import { EmployeeCreateOrConnectWithoutPersonInput } from './employee-create-or-connect-without-person.input';
import { EmployeeUpsertWithWhereUniqueWithoutPersonInput } from './employee-upsert-with-where-unique-without-person.input';
import { EmployeeCreateManyPersonInputEnvelope } from './employee-create-many-person-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithWhereUniqueWithoutPersonInput } from './employee-update-with-where-unique-without-person.input';
import { EmployeeUpdateManyWithWhereWithoutPersonInput } from './employee-update-many-with-where-without-person.input';
import { EmployeeScalarWhereInput } from './employee-scalar-where.input';

@InputType()
export class EmployeeUncheckedUpdateManyWithoutPersonNestedInput {

    @Field(() => [EmployeeCreateWithoutPersonInput], {nullable:true})
    @Type(() => EmployeeCreateWithoutPersonInput)
    create?: Array<EmployeeCreateWithoutPersonInput>;

    @Field(() => [EmployeeCreateOrConnectWithoutPersonInput], {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutPersonInput)
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutPersonInput>;

    @Field(() => [EmployeeUpsertWithWhereUniqueWithoutPersonInput], {nullable:true})
    @Type(() => EmployeeUpsertWithWhereUniqueWithoutPersonInput)
    upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutPersonInput>;

    @Field(() => EmployeeCreateManyPersonInputEnvelope, {nullable:true})
    @Type(() => EmployeeCreateManyPersonInputEnvelope)
    createMany?: EmployeeCreateManyPersonInputEnvelope;

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

    @Field(() => [EmployeeUpdateWithWhereUniqueWithoutPersonInput], {nullable:true})
    @Type(() => EmployeeUpdateWithWhereUniqueWithoutPersonInput)
    update?: Array<EmployeeUpdateWithWhereUniqueWithoutPersonInput>;

    @Field(() => [EmployeeUpdateManyWithWhereWithoutPersonInput], {nullable:true})
    @Type(() => EmployeeUpdateManyWithWhereWithoutPersonInput)
    updateMany?: Array<EmployeeUpdateManyWithWhereWithoutPersonInput>;

    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    @Type(() => EmployeeScalarWhereInput)
    deleteMany?: Array<EmployeeScalarWhereInput>;
}
