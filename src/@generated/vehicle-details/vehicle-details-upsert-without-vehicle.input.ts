import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleDetailsUpdateWithoutVehicleInput } from './vehicle-details-update-without-vehicle.input';
import { Type } from 'class-transformer';
import { VehicleDetailsCreateWithoutVehicleInput } from './vehicle-details-create-without-vehicle.input';
import { VehicleDetailsWhereInput } from './vehicle-details-where.input';

@InputType()
export class VehicleDetailsUpsertWithoutVehicleInput {

    @Field(() => VehicleDetailsUpdateWithoutVehicleInput, {nullable:false})
    @Type(() => VehicleDetailsUpdateWithoutVehicleInput)
    update!: VehicleDetailsUpdateWithoutVehicleInput;

    @Field(() => VehicleDetailsCreateWithoutVehicleInput, {nullable:false})
    @Type(() => VehicleDetailsCreateWithoutVehicleInput)
    create!: VehicleDetailsCreateWithoutVehicleInput;

    @Field(() => VehicleDetailsWhereInput, {nullable:true})
    @Type(() => VehicleDetailsWhereInput)
    where?: VehicleDetailsWhereInput;
}
