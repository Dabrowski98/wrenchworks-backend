import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleWhereInput } from './vehicle-where.input';
import { Type } from 'class-transformer';
import { VehicleUpdateWithoutVehiclesDetailsInput } from './vehicle-update-without-vehicles-details.input';

@InputType()
export class VehicleUpdateToOneWithWhereWithoutVehiclesDetailsInput {

    @Field(() => VehicleWhereInput, {nullable:true})
    @Type(() => VehicleWhereInput)
    where?: VehicleWhereInput;

    @Field(() => VehicleUpdateWithoutVehiclesDetailsInput, {nullable:false})
    @Type(() => VehicleUpdateWithoutVehiclesDetailsInput)
    data!: VehicleUpdateWithoutVehiclesDetailsInput;
}
