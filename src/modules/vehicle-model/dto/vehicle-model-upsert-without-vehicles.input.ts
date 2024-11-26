import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleModelUpdateWithoutVehiclesInput } from './vehicle-model-update-without-vehicles.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleModelCreateWithoutVehiclesInput } from './vehicle-model-create-without-vehicles.input';
import { VehicleModelWhereInput } from './vehicle-model-where.input';

@InputType()
export class VehicleModelUpsertWithoutVehiclesInput {

    @Field(() => VehicleModelUpdateWithoutVehiclesInput, {nullable:false})
    @Type(() => VehicleModelUpdateWithoutVehiclesInput)
    @ValidateNested()
    update!: VehicleModelUpdateWithoutVehiclesInput;

    @Field(() => VehicleModelCreateWithoutVehiclesInput, {nullable:false})
    @Type(() => VehicleModelCreateWithoutVehiclesInput)
    @ValidateNested()
    create!: VehicleModelCreateWithoutVehiclesInput;

    @Field(() => VehicleModelWhereInput, {nullable:true})
    @Type(() => VehicleModelWhereInput)
    where?: VehicleModelWhereInput;
}
