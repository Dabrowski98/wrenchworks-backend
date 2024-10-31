import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleBrandWhereInput } from './vehicle-brand-where.input';
import { Type } from 'class-transformer';
import { VehicleBrandUpdateWithoutVehicleModelsInput } from './vehicle-brand-update-without-vehicle-models.input';

@InputType()
export class VehicleBrandUpdateToOneWithWhereWithoutVehicleModelsInput {

    @Field(() => VehicleBrandWhereInput, {nullable:true})
    @Type(() => VehicleBrandWhereInput)
    where?: VehicleBrandWhereInput;

    @Field(() => VehicleBrandUpdateWithoutVehicleModelsInput, {nullable:false})
    @Type(() => VehicleBrandUpdateWithoutVehicleModelsInput)
    data!: VehicleBrandUpdateWithoutVehicleModelsInput;
}
