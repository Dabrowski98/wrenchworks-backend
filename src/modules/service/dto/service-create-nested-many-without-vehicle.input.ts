import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutVehicleInput } from './service-create-without-vehicle.input';
import { HideField } from '@nestjs/graphql';
import { ServiceCreateOrConnectWithoutVehicleInput } from './service-create-or-connect-without-vehicle.input';
import { ServiceCreateManyVehicleInputEnvelope } from './service-create-many-vehicle-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class ServiceCreateNestedManyWithoutVehicleInput {

    @HideField()
    create?: Array<ServiceCreateWithoutVehicleInput>;

    @HideField()
    connectOrCreate?: Array<ServiceCreateOrConnectWithoutVehicleInput>;

    @HideField()
    createMany?: ServiceCreateManyVehicleInputEnvelope;

    @Field(() => [ServiceWhereUniqueInput], {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>>;
}
