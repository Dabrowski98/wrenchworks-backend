import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { VehicleCreateNestedManyWithoutVehicleModelInput } from '../../vehicle/dto/vehicle-create-nested-many-without-vehicle-model.input';
import { VehicleBrandCreateNestedOneWithoutVehicleModelsInput } from '../../vehicle-brand/dto/vehicle-brand-create-nested-one-without-vehicle-models.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';


@InputType()
export class VehicleModelCreateInput {

    @HideField()
    modelId?: bigint | number;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Model name must be a string' })
    @Validator.Length(2, 50, { message: 'Model name must be between 2 and 50 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Model name is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    modelName!: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    vehicles?: VehicleCreateNestedManyWithoutVehicleModelInput;

    @Field(() => VehicleBrandCreateNestedOneWithoutVehicleModelsInput, {nullable:false})
    @ValidateNested()
    @Type(() => VehicleBrandCreateNestedOneWithoutVehicleModelsInput)
    vehiclesBrand!: VehicleBrandCreateNestedOneWithoutVehicleModelsInput;
}
