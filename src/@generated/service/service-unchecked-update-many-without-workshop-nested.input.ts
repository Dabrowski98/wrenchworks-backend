import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutWorkshopInput } from './service-create-without-workshop.input';
import { Type } from 'class-transformer';
import { ServiceCreateOrConnectWithoutWorkshopInput } from './service-create-or-connect-without-workshop.input';
import { ServiceUpsertWithWhereUniqueWithoutWorkshopInput } from './service-upsert-with-where-unique-without-workshop.input';
import { ServiceCreateManyWorkshopInputEnvelope } from './service-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { ServiceUpdateWithWhereUniqueWithoutWorkshopInput } from './service-update-with-where-unique-without-workshop.input';
import { ServiceUpdateManyWithWhereWithoutWorkshopInput } from './service-update-many-with-where-without-workshop.input';
import { ServiceScalarWhereInput } from './service-scalar-where.input';

@InputType()
export class ServiceUncheckedUpdateManyWithoutWorkshopNestedInput {

    @Field(() => [ServiceCreateWithoutWorkshopInput], {nullable:true})
    @Type(() => ServiceCreateWithoutWorkshopInput)
    create?: Array<ServiceCreateWithoutWorkshopInput>;

    @Field(() => [ServiceCreateOrConnectWithoutWorkshopInput], {nullable:true})
    @Type(() => ServiceCreateOrConnectWithoutWorkshopInput)
    connectOrCreate?: Array<ServiceCreateOrConnectWithoutWorkshopInput>;

    @Field(() => [ServiceUpsertWithWhereUniqueWithoutWorkshopInput], {nullable:true})
    @Type(() => ServiceUpsertWithWhereUniqueWithoutWorkshopInput)
    upsert?: Array<ServiceUpsertWithWhereUniqueWithoutWorkshopInput>;

    @Field(() => ServiceCreateManyWorkshopInputEnvelope, {nullable:true})
    @Type(() => ServiceCreateManyWorkshopInputEnvelope)
    createMany?: ServiceCreateManyWorkshopInputEnvelope;

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

    @Field(() => [ServiceUpdateWithWhereUniqueWithoutWorkshopInput], {nullable:true})
    @Type(() => ServiceUpdateWithWhereUniqueWithoutWorkshopInput)
    update?: Array<ServiceUpdateWithWhereUniqueWithoutWorkshopInput>;

    @Field(() => [ServiceUpdateManyWithWhereWithoutWorkshopInput], {nullable:true})
    @Type(() => ServiceUpdateManyWithWhereWithoutWorkshopInput)
    updateMany?: Array<ServiceUpdateManyWithWhereWithoutWorkshopInput>;

    @Field(() => [ServiceScalarWhereInput], {nullable:true})
    @Type(() => ServiceScalarWhereInput)
    deleteMany?: Array<ServiceScalarWhereInput>;
}
