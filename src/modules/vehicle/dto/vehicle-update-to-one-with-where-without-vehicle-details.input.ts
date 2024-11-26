import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleWhereInput } from './vehicle-where.input';
import { Type } from 'class-transformer';
import { VehicleUpdateWithoutVehicleDetailsInput } from './vehicle-update-without-vehicle-details.input';

@InputType()
export class VehicleUpdateToOneWithWhereWithoutVehicleDetailsInput {

    @Field(() => VehicleWhereInput, {nullable:true})
    @Type(() => VehicleWhereInput)
    where?: VehicleWhereInput;

    @Field(() => VehicleUpdateWithoutVehicleDetailsInput, {nullable:false})
    @Type(() => VehicleUpdateWithoutVehicleDetailsInput)
    data!: VehicleUpdateWithoutVehicleDetailsInput;
}
