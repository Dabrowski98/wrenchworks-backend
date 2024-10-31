import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleBrandCreateWithoutVehiclesInput } from './vehicle-brand-create-without-vehicles.input';
import { Type } from 'class-transformer';
import { VehicleBrandCreateOrConnectWithoutVehiclesInput } from './vehicle-brand-create-or-connect-without-vehicles.input';
import { VehicleBrandUpsertWithoutVehiclesInput } from './vehicle-brand-upsert-without-vehicles.input';
import { Prisma } from '@prisma/client';
import { VehicleBrandWhereUniqueInput } from './vehicle-brand-where-unique.input';
import { VehicleBrandUpdateToOneWithWhereWithoutVehiclesInput } from './vehicle-brand-update-to-one-with-where-without-vehicles.input';

@InputType()
export class VehicleBrandUpdateOneRequiredWithoutVehiclesNestedInput {

    @Field(() => VehicleBrandCreateWithoutVehiclesInput, {nullable:true})
    @Type(() => VehicleBrandCreateWithoutVehiclesInput)
    create?: VehicleBrandCreateWithoutVehiclesInput;

    @Field(() => VehicleBrandCreateOrConnectWithoutVehiclesInput, {nullable:true})
    @Type(() => VehicleBrandCreateOrConnectWithoutVehiclesInput)
    connectOrCreate?: VehicleBrandCreateOrConnectWithoutVehiclesInput;

    @Field(() => VehicleBrandUpsertWithoutVehiclesInput, {nullable:true})
    @Type(() => VehicleBrandUpsertWithoutVehiclesInput)
    upsert?: VehicleBrandUpsertWithoutVehiclesInput;

    @Field(() => VehicleBrandWhereUniqueInput, {nullable:true})
    @Type(() => VehicleBrandWhereUniqueInput)
    connect?: Prisma.AtLeast<VehicleBrandWhereUniqueInput, 'brandName'>;

    @Field(() => VehicleBrandUpdateToOneWithWhereWithoutVehiclesInput, {nullable:true})
    @Type(() => VehicleBrandUpdateToOneWithWhereWithoutVehiclesInput)
    update?: VehicleBrandUpdateToOneWithWhereWithoutVehiclesInput;
}
