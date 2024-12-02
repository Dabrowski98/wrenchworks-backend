import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutServiceRequestsInput } from './vehicle-create-without-service-requests.input';
import { HideField } from '@nestjs/graphql';
import { VehicleCreateOrConnectWithoutServiceRequestsInput } from './vehicle-create-or-connect-without-service-requests.input';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class VehicleCreateNestedOneWithoutServiceRequestsInput {

    @Field(() => VehicleWhereUniqueInput, {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>;
}