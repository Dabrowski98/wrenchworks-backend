import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { VehicleModelUpdateManyWithoutVehiclesBrandNestedInput } from '../../vehicle-model/dto/vehicle-model-update-many-without-vehicles-brand-nested.input';

@InputType()
export class VehicleBrandUpdateInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Brand name must be a string' })
    @Validator.IsNotEmpty({ message: 'Brand name is required' })
    @Validator.Length(2, 50, { message: 'Brand name must be between 2 and 50 characters' })
    brandName?: string;
    
}
