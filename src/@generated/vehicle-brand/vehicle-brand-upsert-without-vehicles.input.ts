import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleBrandUpdateWithoutVehiclesInput } from './vehicle-brand-update-without-vehicles.input';
import { Type } from 'class-transformer';
import { VehicleBrandCreateWithoutVehiclesInput } from './vehicle-brand-create-without-vehicles.input';
import { VehicleBrandWhereInput } from './vehicle-brand-where.input';

@InputType()
export class VehicleBrandUpsertWithoutVehiclesInput {

    @Field(() => VehicleBrandUpdateWithoutVehiclesInput, {nullable:false})
    @Type(() => VehicleBrandUpdateWithoutVehiclesInput)
    update!: VehicleBrandUpdateWithoutVehiclesInput;

    @Field(() => VehicleBrandCreateWithoutVehiclesInput, {nullable:false})
    @Type(() => VehicleBrandCreateWithoutVehiclesInput)
    create!: VehicleBrandCreateWithoutVehiclesInput;

    @Field(() => VehicleBrandWhereInput, {nullable:true})
    @Type(() => VehicleBrandWhereInput)
    where?: VehicleBrandWhereInput;
}
