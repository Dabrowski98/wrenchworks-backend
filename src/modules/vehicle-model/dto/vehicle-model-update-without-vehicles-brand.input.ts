import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { VehicleUpdateManyWithoutVehicleModelNestedInput } from '../../vehicle/dto/vehicle-update-many-without-vehicle-model-nested.input';
import { Type } from 'class-transformer';


@InputType()
export class VehicleModelUpdateWithoutVehiclesBrandInput {

    @HideField()
    modelId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Model name must be a string' })
    @Validator.IsNotEmpty({ message: 'Model name is required' })
    @Validator.Length(2, 50, { message: 'Model name must be between 2 and 50 characters' })
    modelName?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => VehicleUpdateManyWithoutVehicleModelNestedInput, {nullable:true})
    @Type(() => VehicleUpdateManyWithoutVehicleModelNestedInput)
    vehicles?: VehicleUpdateManyWithoutVehicleModelNestedInput;
}
