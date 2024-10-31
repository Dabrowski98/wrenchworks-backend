import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestCreateWithoutWorkshopInput } from './service-request-create-without-workshop.input';
import { Type } from 'class-transformer';
import { ServiceRequestCreateOrConnectWithoutWorkshopInput } from './service-request-create-or-connect-without-workshop.input';
import { ServiceRequestCreateManyWorkshopInputEnvelope } from './service-request-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';

@InputType()
export class ServiceRequestUncheckedCreateNestedManyWithoutWorkshopInput {

    @Field(() => [ServiceRequestCreateWithoutWorkshopInput], {nullable:true})
    @Type(() => ServiceRequestCreateWithoutWorkshopInput)
    create?: Array<ServiceRequestCreateWithoutWorkshopInput>;

    @Field(() => [ServiceRequestCreateOrConnectWithoutWorkshopInput], {nullable:true})
    @Type(() => ServiceRequestCreateOrConnectWithoutWorkshopInput)
    connectOrCreate?: Array<ServiceRequestCreateOrConnectWithoutWorkshopInput>;

    @Field(() => ServiceRequestCreateManyWorkshopInputEnvelope, {nullable:true})
    @Type(() => ServiceRequestCreateManyWorkshopInputEnvelope)
    createMany?: ServiceRequestCreateManyWorkshopInputEnvelope;

    @Field(() => [ServiceRequestWhereUniqueInput], {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>>;
}
