import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleDetailsWhereInput } from './vehicle-details-where.input';
import { Type } from 'class-transformer';
import { VehicleDetailsUpdateWithoutVehicleInput } from './vehicle-details-update-without-vehicle.input';

@InputType()
export class VehicleDetailsUpdateToOneWithWhereWithoutVehicleInput {

    @Field(() => VehicleDetailsWhereInput, {nullable:true})
    @Type(() => VehicleDetailsWhereInput)
    where?: VehicleDetailsWhereInput;

    @Field(() => VehicleDetailsUpdateWithoutVehicleInput, {nullable:false})
    @Type(() => VehicleDetailsUpdateWithoutVehicleInput)
    data!: VehicleDetailsUpdateWithoutVehicleInput;
}
