import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutWorkshopInput } from './service-create-without-workshop.input';
import { Type } from 'class-transformer';
import { ServiceCreateOrConnectWithoutWorkshopInput } from './service-create-or-connect-without-workshop.input';
import { ServiceCreateManyWorkshopInputEnvelope } from './service-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';

@InputType()
export class ServiceCreateNestedManyWithoutWorkshopInput {

    @Field(() => [ServiceCreateWithoutWorkshopInput], {nullable:true})
    @Type(() => ServiceCreateWithoutWorkshopInput)
    create?: Array<ServiceCreateWithoutWorkshopInput>;

    @Field(() => [ServiceCreateOrConnectWithoutWorkshopInput], {nullable:true})
    @Type(() => ServiceCreateOrConnectWithoutWorkshopInput)
    connectOrCreate?: Array<ServiceCreateOrConnectWithoutWorkshopInput>;

    @Field(() => ServiceCreateManyWorkshopInputEnvelope, {nullable:true})
    @Type(() => ServiceCreateManyWorkshopInputEnvelope)
    createMany?: ServiceCreateManyWorkshopInputEnvelope;

    @Field(() => [ServiceWhereUniqueInput], {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>>;
}
