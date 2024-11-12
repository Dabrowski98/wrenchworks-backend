import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleModelWhereInput } from './vehicle-model-where.input';
import { Type } from 'class-transformer';
import { VehicleModelUpdateWithoutVehiclesInput } from './vehicle-model-update-without-vehicles.input';

@InputType()
export class VehicleModelUpdateToOneWithWhereWithoutVehiclesInput {

    @Field(() => VehicleModelWhereInput, {nullable:true})
    @Type(() => VehicleModelWhereInput)
    where?: VehicleModelWhereInput;

    @Field(() => VehicleModelUpdateWithoutVehiclesInput, {nullable:false})
    @Type(() => VehicleModelUpdateWithoutVehiclesInput)
    data!: VehicleModelUpdateWithoutVehiclesInput;
}
