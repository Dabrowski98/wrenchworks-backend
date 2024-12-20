import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleBrandUpdateWithoutVehicleModelsInput } from './vehicle-brand-update-without-vehicle-models.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleBrandCreateWithoutVehicleModelsInput } from './vehicle-brand-create-without-vehicle-models.input';
import { VehicleBrandWhereInput } from './vehicle-brand-where.input';

@InputType()
export class VehicleBrandUpsertWithoutVehicleModelsInput {

    @Field(() => VehicleBrandUpdateWithoutVehicleModelsInput, {nullable:false})
    @Type(() => VehicleBrandUpdateWithoutVehicleModelsInput)
    @ValidateNested()
    update!: VehicleBrandUpdateWithoutVehicleModelsInput;

    @Field(() => VehicleBrandCreateWithoutVehicleModelsInput, {nullable:false})
    @Type(() => VehicleBrandCreateWithoutVehicleModelsInput)
    @ValidateNested()
    create!: VehicleBrandCreateWithoutVehicleModelsInput;

    @Field(() => VehicleBrandWhereInput, {nullable:true})
    @Type(() => VehicleBrandWhereInput)
    where?: VehicleBrandWhereInput;
}
