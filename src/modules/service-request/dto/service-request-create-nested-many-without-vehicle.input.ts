import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestCreateWithoutVehicleInput } from './service-request-create-without-vehicle.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceRequestCreateOrConnectWithoutVehicleInput } from './service-request-create-or-connect-without-vehicle.input';
import { HideField } from '@nestjs/graphql';
import { ServiceRequestCreateManyVehicleInputEnvelope } from './service-request-create-many-vehicle-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';

@InputType()
export class ServiceRequestCreateNestedManyWithoutVehicleInput {

    @Field(() => [ServiceRequestCreateWithoutVehicleInput], {nullable:true})
    @Type(() => ServiceRequestCreateWithoutVehicleInput)
    @ValidateNested()
    create?: Array<ServiceRequestCreateWithoutVehicleInput>;

    @Field(() => ServiceRequestCreateManyVehicleInputEnvelope, {nullable:true})
    @Type(() => ServiceRequestCreateManyVehicleInputEnvelope)
    @ValidateNested()
    createMany?: ServiceRequestCreateManyVehicleInputEnvelope;

    }