import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutServicesInput } from './vehicle-create-without-services.input';
import { HideField } from '@nestjs/graphql';
import { VehicleCreateOrConnectWithoutServicesInput } from './vehicle-create-or-connect-without-services.input';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class VehicleCreateNestedOneWithoutServicesInput {

    @HideField()
    create?: VehicleCreateWithoutServicesInput;

    @HideField()
    connectOrCreate?: VehicleCreateOrConnectWithoutServicesInput;

    @Field(() => VehicleWhereUniqueInput, {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>;
}
