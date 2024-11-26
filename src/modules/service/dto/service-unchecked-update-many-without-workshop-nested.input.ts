import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutWorkshopInput } from './service-create-without-workshop.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
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
    @ValidateNested()
    create?: Array<ServiceCreateWithoutWorkshopInput>;

    @Field(() => [ServiceCreateOrConnectWithoutWorkshopInput], {nullable:true})
    @Type(() => ServiceCreateOrConnectWithoutWorkshopInput)
    @ValidateNested()
    connectOrCreate?: Array<ServiceCreateOrConnectWithoutWorkshopInput>;

    @Field(() => [ServiceUpsertWithWhereUniqueWithoutWorkshopInput], {nullable:true})
    @Type(() => ServiceUpsertWithWhereUniqueWithoutWorkshopInput)
    @ValidateNested()
    upsert?: Array<ServiceUpsertWithWhereUniqueWithoutWorkshopInput>;

    @Field(() => ServiceCreateManyWorkshopInputEnvelope, {nullable:true})
    @Type(() => ServiceCreateManyWorkshopInputEnvelope)
    @ValidateNested()
    createMany?: ServiceCreateManyWorkshopInputEnvelope;

    @Field(() => [ServiceWhereUniqueInput], {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    @ValidateNested()
    set?: Array<Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>>;

    @Field(() => [ServiceWhereUniqueInput], {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    @ValidateNested()
    disconnect?: Array<Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>>;

    @Field(() => [ServiceWhereUniqueInput], {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    @ValidateNested()
    delete?: Array<Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>>;

    @Field(() => [ServiceWhereUniqueInput], {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>>;

    @Field(() => [ServiceUpdateWithWhereUniqueWithoutWorkshopInput], {nullable:true})
    @Type(() => ServiceUpdateWithWhereUniqueWithoutWorkshopInput)
    @ValidateNested()
    update?: Array<ServiceUpdateWithWhereUniqueWithoutWorkshopInput>;

    @Field(() => [ServiceUpdateManyWithWhereWithoutWorkshopInput], {nullable:true})
    @Type(() => ServiceUpdateManyWithWhereWithoutWorkshopInput)
    @ValidateNested()
    updateMany?: Array<ServiceUpdateManyWithWhereWithoutWorkshopInput>;

    @Field(() => [ServiceScalarWhereInput], {nullable:true})
    @Type(() => ServiceScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<ServiceScalarWhereInput>;
}
