import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutEmployeeInput } from './service-create-without-employee.input';
import { Type } from 'class-transformer';
import { ServiceCreateOrConnectWithoutEmployeeInput } from './service-create-or-connect-without-employee.input';
import { ServiceUpsertWithWhereUniqueWithoutEmployeeInput } from './service-upsert-with-where-unique-without-employee.input';
import { ServiceCreateManyEmployeeInputEnvelope } from './service-create-many-employee-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { ServiceUpdateWithWhereUniqueWithoutEmployeeInput } from './service-update-with-where-unique-without-employee.input';
import { ServiceUpdateManyWithWhereWithoutEmployeeInput } from './service-update-many-with-where-without-employee.input';
import { ServiceScalarWhereInput } from './service-scalar-where.input';

@InputType()
export class ServiceUpdateManyWithoutEmployeeNestedInput {

    @Field(() => [ServiceCreateWithoutEmployeeInput], {nullable:true})
    @Type(() => ServiceCreateWithoutEmployeeInput)
    create?: Array<ServiceCreateWithoutEmployeeInput>;

    @Field(() => [ServiceCreateOrConnectWithoutEmployeeInput], {nullable:true})
    @Type(() => ServiceCreateOrConnectWithoutEmployeeInput)
    connectOrCreate?: Array<ServiceCreateOrConnectWithoutEmployeeInput>;

    @Field(() => [ServiceUpsertWithWhereUniqueWithoutEmployeeInput], {nullable:true})
    @Type(() => ServiceUpsertWithWhereUniqueWithoutEmployeeInput)
    upsert?: Array<ServiceUpsertWithWhereUniqueWithoutEmployeeInput>;

    @Field(() => ServiceCreateManyEmployeeInputEnvelope, {nullable:true})
    @Type(() => ServiceCreateManyEmployeeInputEnvelope)
    createMany?: ServiceCreateManyEmployeeInputEnvelope;

    @Field(() => [ServiceWhereUniqueInput], {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>>;

    @Field(() => [ServiceWhereUniqueInput], {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>>;

    @Field(() => [ServiceWhereUniqueInput], {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>>;

    @Field(() => [ServiceWhereUniqueInput], {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>>;

    @Field(() => [ServiceUpdateWithWhereUniqueWithoutEmployeeInput], {nullable:true})
    @Type(() => ServiceUpdateWithWhereUniqueWithoutEmployeeInput)
    update?: Array<ServiceUpdateWithWhereUniqueWithoutEmployeeInput>;

    @Field(() => [ServiceUpdateManyWithWhereWithoutEmployeeInput], {nullable:true})
    @Type(() => ServiceUpdateManyWithWhereWithoutEmployeeInput)
    updateMany?: Array<ServiceUpdateManyWithWhereWithoutEmployeeInput>;

    @Field(() => [ServiceScalarWhereInput], {nullable:true})
    @Type(() => ServiceScalarWhereInput)
    deleteMany?: Array<ServiceScalarWhereInput>;
}
