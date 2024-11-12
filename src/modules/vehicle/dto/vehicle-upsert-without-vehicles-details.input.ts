import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleUpdateWithoutVehiclesDetailsInput } from './vehicle-update-without-vehicles-details.input';
import { Type } from 'class-transformer';
import { VehicleCreateWithoutVehiclesDetailsInput } from './vehicle-create-without-vehicles-details.input';
import { VehicleWhereInput } from './vehicle-where.input';

@InputType()
export class VehicleUpsertWithoutVehiclesDetailsInput {

    @Field(() => VehicleUpdateWithoutVehiclesDetailsInput, {nullable:false})
    @Type(() => VehicleUpdateWithoutVehiclesDetailsInput)
    update!: VehicleUpdateWithoutVehiclesDetailsInput;

    @Field(() => VehicleCreateWithoutVehiclesDetailsInput, {nullable:false})
    @Type(() => VehicleCreateWithoutVehiclesDetailsInput)
    create!: VehicleCreateWithoutVehiclesDetailsInput;

    @Field(() => VehicleWhereInput, {nullable:true})
    @Type(() => VehicleWhereInput)
    where?: VehicleWhereInput;
}
