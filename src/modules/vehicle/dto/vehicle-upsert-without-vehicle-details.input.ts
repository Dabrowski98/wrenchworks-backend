import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleUpdateWithoutVehicleDetailsInput } from './vehicle-update-without-vehicle-details.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleCreateWithoutVehicleDetailsInput } from './vehicle-create-without-vehicle-details.input';
import { VehicleWhereInput } from './vehicle-where.input';

@InputType()
export class VehicleUpsertWithoutVehicleDetailsInput {

    @Field(() => VehicleUpdateWithoutVehicleDetailsInput, {nullable:false})
    @Type(() => VehicleUpdateWithoutVehicleDetailsInput)
    @ValidateNested()
    update!: VehicleUpdateWithoutVehicleDetailsInput;

    @Field(() => VehicleCreateWithoutVehicleDetailsInput, {nullable:false})
    @Type(() => VehicleCreateWithoutVehicleDetailsInput)
    @ValidateNested()
    create!: VehicleCreateWithoutVehicleDetailsInput;

    @Field(() => VehicleWhereInput, {nullable:true})
    @Type(() => VehicleWhereInput)
    where?: VehicleWhereInput;
}
