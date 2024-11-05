import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutVehiclesDetailsInput } from './vehicle-create-without-vehicles-details.input';
import { Type } from 'class-transformer';
import { VehicleCreateOrConnectWithoutVehiclesDetailsInput } from './vehicle-create-or-connect-without-vehicles-details.input';
import { VehicleUpsertWithoutVehiclesDetailsInput } from './vehicle-upsert-without-vehicles-details.input';
import { VehicleWhereInput } from './vehicle-where.input';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { VehicleUpdateToOneWithWhereWithoutVehiclesDetailsInput } from './vehicle-update-to-one-with-where-without-vehicles-details.input';

@InputType()
export class VehicleUpdateOneWithoutVehiclesDetailsNestedInput {

    @Field(() => VehicleCreateWithoutVehiclesDetailsInput, {nullable:true})
    @Type(() => VehicleCreateWithoutVehiclesDetailsInput)
    create?: VehicleCreateWithoutVehiclesDetailsInput;

    @Field(() => VehicleCreateOrConnectWithoutVehiclesDetailsInput, {nullable:true})
    @Type(() => VehicleCreateOrConnectWithoutVehiclesDetailsInput)
    connectOrCreate?: VehicleCreateOrConnectWithoutVehiclesDetailsInput;

    @Field(() => VehicleUpsertWithoutVehiclesDetailsInput, {nullable:true})
    @Type(() => VehicleUpsertWithoutVehiclesDetailsInput)
    upsert?: VehicleUpsertWithoutVehiclesDetailsInput;

    @Field(() => VehicleWhereInput, {nullable:true})
    @Type(() => VehicleWhereInput)
    disconnect?: VehicleWhereInput;

    @Field(() => VehicleWhereInput, {nullable:true})
    @Type(() => VehicleWhereInput)
    delete?: VehicleWhereInput;

    @Field(() => VehicleWhereUniqueInput, {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    connect?: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId'>;

    @Field(() => VehicleUpdateToOneWithWhereWithoutVehiclesDetailsInput, {nullable:true})
    @Type(() => VehicleUpdateToOneWithWhereWithoutVehiclesDetailsInput)
    update?: VehicleUpdateToOneWithWhereWithoutVehiclesDetailsInput;
}
