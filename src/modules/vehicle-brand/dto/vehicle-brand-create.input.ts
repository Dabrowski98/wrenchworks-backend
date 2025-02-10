import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { VehicleModelCreateNestedManyWithoutVehicleBrandInput } from '../../vehicle-model/dto/vehicle-model-create-nested-many-without-vehicle-brand.input';

@InputType()
export class VehicleBrandCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Brand name must be a string' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Brand name is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    @Validator.Length(2, 50, { message: 'Brand name must be between 2 and 50 characters' })
    brandName!: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    vehicleModels?: VehicleModelCreateNestedManyWithoutVehicleBrandInput;
}
