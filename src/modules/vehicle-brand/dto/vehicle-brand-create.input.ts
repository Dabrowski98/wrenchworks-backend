import { Field, HideField } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { VehicleModelCreateNestedManyWithoutVehiclesBrandInput } from '../../vehicle-model/dto/vehicle-model-create-nested-many-without-vehicles-brand.input';

@InputType()
export class VehicleBrandCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Brand name must be a string' })
    @Validator.IsNotEmpty({ message: 'Brand name is required' })
    @Validator.Length(2, 50, { message: 'Brand name must be between 2 and 50 characters' })
    brandName!: string;

}
