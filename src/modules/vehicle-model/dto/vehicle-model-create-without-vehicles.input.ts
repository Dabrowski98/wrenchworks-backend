import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { VehicleBrandCreateNestedOneWithoutVehicleModelsInput } from '../../vehicle-brand/dto/vehicle-brand-create-nested-one-without-vehicle-models.input';
import { CREATE, UPDATE } from 'src/constants/validation-groups';


@InputType()
export class VehicleModelCreateWithoutVehiclesInput {

    @HideField()
    modelId?: bigint | number;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Model name must be a string' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Model name is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    @Validator.Length(2, 50, { message: 'Model name must be between 2 and 50 characters' })
    modelName!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => VehicleBrandCreateNestedOneWithoutVehicleModelsInput, {nullable:false})
    vehiclesBrand!: VehicleBrandCreateNestedOneWithoutVehicleModelsInput;
}