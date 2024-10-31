import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutEmployeeInput } from './service-create-without-employee.input';
import { Type } from 'class-transformer';
import { ServiceCreateOrConnectWithoutEmployeeInput } from './service-create-or-connect-without-employee.input';
import { ServiceCreateManyEmployeeInputEnvelope } from './service-create-many-employee-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';

@InputType()
export class ServiceUncheckedCreateNestedManyWithoutEmployeeInput {

    @Field(() => [ServiceCreateWithoutEmployeeInput], {nullable:true})
    @Type(() => ServiceCreateWithoutEmployeeInput)
    create?: Array<ServiceCreateWithoutEmployeeInput>;

    @Field(() => [ServiceCreateOrConnectWithoutEmployeeInput], {nullable:true})
    @Type(() => ServiceCreateOrConnectWithoutEmployeeInput)
    connectOrCreate?: Array<ServiceCreateOrConnectWithoutEmployeeInput>;

    @Field(() => ServiceCreateManyEmployeeInputEnvelope, {nullable:true})
    @Type(() => ServiceCreateManyEmployeeInputEnvelope)
    createMany?: ServiceCreateManyEmployeeInputEnvelope;

    @Field(() => [ServiceWhereUniqueInput], {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>>;
}
