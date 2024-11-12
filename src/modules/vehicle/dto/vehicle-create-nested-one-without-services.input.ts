import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutServicesInput } from './vehicle-create-without-services.input';
import { Type } from 'class-transformer';
import { VehicleCreateOrConnectWithoutServicesInput } from './vehicle-create-or-connect-without-services.input';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';

@InputType()
export class VehicleCreateNestedOneWithoutServicesInput {

    @Field(() => VehicleCreateWithoutServicesInput, {nullable:true})
    @Type(() => VehicleCreateWithoutServicesInput)
    create?: VehicleCreateWithoutServicesInput;

    @Field(() => VehicleCreateOrConnectWithoutServicesInput, {nullable:true})
    @Type(() => VehicleCreateOrConnectWithoutServicesInput)
    connectOrCreate?: VehicleCreateOrConnectWithoutServicesInput;

    @Field(() => VehicleWhereUniqueInput, {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    connect?: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId'>;
}
