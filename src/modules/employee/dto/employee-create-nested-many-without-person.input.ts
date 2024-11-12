import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutPersonInput } from './employee-create-without-person.input';
import { Type } from 'class-transformer';
import { EmployeeCreateOrConnectWithoutPersonInput } from './employee-create-or-connect-without-person.input';
import { EmployeeCreateManyPersonInputEnvelope } from './employee-create-many-person-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeCreateNestedManyWithoutPersonInput {

    @Field(() => [EmployeeCreateWithoutPersonInput], {nullable:true})
    @Type(() => EmployeeCreateWithoutPersonInput)
    create?: Array<EmployeeCreateWithoutPersonInput>;

    @Field(() => [EmployeeCreateOrConnectWithoutPersonInput], {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutPersonInput)
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutPersonInput>;

    @Field(() => EmployeeCreateManyPersonInputEnvelope, {nullable:true})
    @Type(() => EmployeeCreateManyPersonInputEnvelope)
    createMany?: EmployeeCreateManyPersonInputEnvelope;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId_workshopId'>>;
}
