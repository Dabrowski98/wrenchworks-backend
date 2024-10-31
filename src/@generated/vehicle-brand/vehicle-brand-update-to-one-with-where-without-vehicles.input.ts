import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleBrandWhereInput } from './vehicle-brand-where.input';
import { Type } from 'class-transformer';
import { VehicleBrandUpdateWithoutVehiclesInput } from './vehicle-brand-update-without-vehicles.input';

@InputType()
export class VehicleBrandUpdateToOneWithWhereWithoutVehiclesInput {

    @Field(() => VehicleBrandWhereInput, {nullable:true})
    @Type(() => VehicleBrandWhereInput)
    where?: VehicleBrandWhereInput;

    @Field(() => VehicleBrandUpdateWithoutVehiclesInput, {nullable:false})
    @Type(() => VehicleBrandUpdateWithoutVehiclesInput)
    data!: VehicleBrandUpdateWithoutVehiclesInput;
}
