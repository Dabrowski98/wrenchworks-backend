import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutVehicleInput } from './service-create-without-vehicle.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceCreateOrConnectWithoutVehicleInput } from './service-create-or-connect-without-vehicle.input';
import { ServiceUpsertWithWhereUniqueWithoutVehicleInput } from './service-upsert-with-where-unique-without-vehicle.input';
import { ServiceCreateManyVehicleInputEnvelope } from './service-create-many-vehicle-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { ServiceUpdateWithWhereUniqueWithoutVehicleInput } from './service-update-with-where-unique-without-vehicle.input';
import { ServiceUpdateManyWithWhereWithoutVehicleInput } from './service-update-many-with-where-without-vehicle.input';
import { ServiceScalarWhereInput } from './service-scalar-where.input';

@InputType()
export class ServiceUncheckedUpdateManyWithoutVehicleNestedInput {

    @Field(() => [ServiceCreateWithoutVehicleInput], {nullable:true})
    @Type(() => ServiceCreateWithoutVehicleInput)
    @ValidateNested()
    create?: Array<ServiceCreateWithoutVehicleInput>;

    @Field(() => [ServiceCreateOrConnectWithoutVehicleInput], {nullable:true})
    @Type(() => ServiceCreateOrConnectWithoutVehicleInput)
    @ValidateNested()
    connectOrCreate?: Array<ServiceCreateOrConnectWithoutVehicleInput>;

    @Field(() => [ServiceUpsertWithWhereUniqueWithoutVehicleInput], {nullable:true})
    @Type(() => ServiceUpsertWithWhereUniqueWithoutVehicleInput)
    @ValidateNested()
    upsert?: Array<ServiceUpsertWithWhereUniqueWithoutVehicleInput>;

    @Field(() => ServiceCreateManyVehicleInputEnvelope, {nullable:true})
    @Type(() => ServiceCreateManyVehicleInputEnvelope)
    @ValidateNested()
    createMany?: ServiceCreateManyVehicleInputEnvelope;

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

    @Field(() => [ServiceUpdateWithWhereUniqueWithoutVehicleInput], {nullable:true})
    @Type(() => ServiceUpdateWithWhereUniqueWithoutVehicleInput)
    @ValidateNested()
    update?: Array<ServiceUpdateWithWhereUniqueWithoutVehicleInput>;

    @Field(() => [ServiceUpdateManyWithWhereWithoutVehicleInput], {nullable:true})
    @Type(() => ServiceUpdateManyWithWhereWithoutVehicleInput)
    @ValidateNested()
    updateMany?: Array<ServiceUpdateManyWithWhereWithoutVehicleInput>;

    @Field(() => [ServiceScalarWhereInput], {nullable:true})
    @Type(() => ServiceScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<ServiceScalarWhereInput>;
}
