import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { VehicleModelUncheckedCreateNestedManyWithoutVehiclesBrandInput } from '../../vehicle-model/dto/vehicle-model-unchecked-create-nested-many-without-vehicles-brand.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';

@InputType()
export class VehicleBrandUncheckedCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Brand name must be a string' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Brand name is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    @Validator.Length(2, 50, { message: 'Brand name must be between 2 and 50 characters' })
    brandName!: string;

    @Field(() => VehicleModelUncheckedCreateNestedManyWithoutVehiclesBrandInput, {nullable:true})
    @ValidateNested()
    @Type(() => VehicleModelUncheckedCreateNestedManyWithoutVehiclesBrandInput)
    vehicleModels?: VehicleModelUncheckedCreateNestedManyWithoutVehiclesBrandInput;
}