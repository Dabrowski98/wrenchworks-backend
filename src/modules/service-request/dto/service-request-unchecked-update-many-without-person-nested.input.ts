import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestCreateWithoutPersonInput } from './service-request-create-without-person.input';
import { Type } from 'class-transformer';
import { ServiceRequestCreateOrConnectWithoutPersonInput } from './service-request-create-or-connect-without-person.input';
import { ServiceRequestUpsertWithWhereUniqueWithoutPersonInput } from './service-request-upsert-with-where-unique-without-person.input';
import { ServiceRequestCreateManyPersonInputEnvelope } from './service-request-create-many-person-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';
import { ServiceRequestUpdateWithWhereUniqueWithoutPersonInput } from './service-request-update-with-where-unique-without-person.input';
import { ServiceRequestUpdateManyWithWhereWithoutPersonInput } from './service-request-update-many-with-where-without-person.input';
import { ServiceRequestScalarWhereInput } from './service-request-scalar-where.input';

@InputType()
export class ServiceRequestUncheckedUpdateManyWithoutPersonNestedInput {

    @Field(() => [ServiceRequestCreateWithoutPersonInput], {nullable:true})
    @Type(() => ServiceRequestCreateWithoutPersonInput)
    create?: Array<ServiceRequestCreateWithoutPersonInput>;

    @Field(() => [ServiceRequestCreateOrConnectWithoutPersonInput], {nullable:true})
    @Type(() => ServiceRequestCreateOrConnectWithoutPersonInput)
    connectOrCreate?: Array<ServiceRequestCreateOrConnectWithoutPersonInput>;

    @Field(() => [ServiceRequestUpsertWithWhereUniqueWithoutPersonInput], {nullable:true})
    @Type(() => ServiceRequestUpsertWithWhereUniqueWithoutPersonInput)
    upsert?: Array<ServiceRequestUpsertWithWhereUniqueWithoutPersonInput>;

    @Field(() => ServiceRequestCreateManyPersonInputEnvelope, {nullable:true})
    @Type(() => ServiceRequestCreateManyPersonInputEnvelope)
    createMany?: ServiceRequestCreateManyPersonInputEnvelope;

    @Field(() => [ServiceRequestWhereUniqueInput], {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>>;

    @Field(() => [ServiceRequestWhereUniqueInput], {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>>;

    @Field(() => [ServiceRequestWhereUniqueInput], {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>>;

    @Field(() => [ServiceRequestWhereUniqueInput], {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>>;

    @Field(() => [ServiceRequestUpdateWithWhereUniqueWithoutPersonInput], {nullable:true})
    @Type(() => ServiceRequestUpdateWithWhereUniqueWithoutPersonInput)
    update?: Array<ServiceRequestUpdateWithWhereUniqueWithoutPersonInput>;

    @Field(() => [ServiceRequestUpdateManyWithWhereWithoutPersonInput], {nullable:true})
    @Type(() => ServiceRequestUpdateManyWithWhereWithoutPersonInput)
    updateMany?: Array<ServiceRequestUpdateManyWithWhereWithoutPersonInput>;

    @Field(() => [ServiceRequestScalarWhereInput], {nullable:true})
    @Type(() => ServiceRequestScalarWhereInput)
    deleteMany?: Array<ServiceRequestScalarWhereInput>;
}
