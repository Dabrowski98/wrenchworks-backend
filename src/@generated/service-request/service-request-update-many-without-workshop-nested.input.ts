import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestCreateWithoutWorkshopInput } from './service-request-create-without-workshop.input';
import { Type } from 'class-transformer';
import { ServiceRequestCreateOrConnectWithoutWorkshopInput } from './service-request-create-or-connect-without-workshop.input';
import { ServiceRequestUpsertWithWhereUniqueWithoutWorkshopInput } from './service-request-upsert-with-where-unique-without-workshop.input';
import { ServiceRequestCreateManyWorkshopInputEnvelope } from './service-request-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';
import { ServiceRequestUpdateWithWhereUniqueWithoutWorkshopInput } from './service-request-update-with-where-unique-without-workshop.input';
import { ServiceRequestUpdateManyWithWhereWithoutWorkshopInput } from './service-request-update-many-with-where-without-workshop.input';
import { ServiceRequestScalarWhereInput } from './service-request-scalar-where.input';

@InputType()
export class ServiceRequestUpdateManyWithoutWorkshopNestedInput {

    @Field(() => [ServiceRequestCreateWithoutWorkshopInput], {nullable:true})
    @Type(() => ServiceRequestCreateWithoutWorkshopInput)
    create?: Array<ServiceRequestCreateWithoutWorkshopInput>;

    @Field(() => [ServiceRequestCreateOrConnectWithoutWorkshopInput], {nullable:true})
    @Type(() => ServiceRequestCreateOrConnectWithoutWorkshopInput)
    connectOrCreate?: Array<ServiceRequestCreateOrConnectWithoutWorkshopInput>;

    @Field(() => [ServiceRequestUpsertWithWhereUniqueWithoutWorkshopInput], {nullable:true})
    @Type(() => ServiceRequestUpsertWithWhereUniqueWithoutWorkshopInput)
    upsert?: Array<ServiceRequestUpsertWithWhereUniqueWithoutWorkshopInput>;

    @Field(() => ServiceRequestCreateManyWorkshopInputEnvelope, {nullable:true})
    @Type(() => ServiceRequestCreateManyWorkshopInputEnvelope)
    createMany?: ServiceRequestCreateManyWorkshopInputEnvelope;

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

    @Field(() => [ServiceRequestUpdateWithWhereUniqueWithoutWorkshopInput], {nullable:true})
    @Type(() => ServiceRequestUpdateWithWhereUniqueWithoutWorkshopInput)
    update?: Array<ServiceRequestUpdateWithWhereUniqueWithoutWorkshopInput>;

    @Field(() => [ServiceRequestUpdateManyWithWhereWithoutWorkshopInput], {nullable:true})
    @Type(() => ServiceRequestUpdateManyWithWhereWithoutWorkshopInput)
    updateMany?: Array<ServiceRequestUpdateManyWithWhereWithoutWorkshopInput>;

    @Field(() => [ServiceRequestScalarWhereInput], {nullable:true})
    @Type(() => ServiceRequestScalarWhereInput)
    deleteMany?: Array<ServiceRequestScalarWhereInput>;
}
