import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleDetailsUpdateWithoutVehicleInput } from './vehicle-details-update-without-vehicle.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleDetailsCreateWithoutVehicleInput } from './vehicle-details-create-without-vehicle.input';
import { VehicleDetailsWhereInput } from './vehicle-details-where.input';

@InputType()
export class VehicleDetailsUpsertWithoutVehicleInput {

    @Field(() => VehicleDetailsUpdateWithoutVehicleInput, {nullable:false})
    @Type(() => VehicleDetailsUpdateWithoutVehicleInput)
    @ValidateNested()
    update!: VehicleDetailsUpdateWithoutVehicleInput;

    @Field(() => VehicleDetailsCreateWithoutVehicleInput, {nullable:false})
    @Type(() => VehicleDetailsCreateWithoutVehicleInput)
    @ValidateNested()
    create!: VehicleDetailsCreateWithoutVehicleInput;

    @Field(() => VehicleDetailsWhereInput, {nullable:true})
    @Type(() => VehicleDetailsWhereInput)
    where?: VehicleDetailsWhereInput;
}
