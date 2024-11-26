import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from 'nestjs-graphql';
import { VehicleModelUncheckedUpdateManyWithoutVehiclesBrandNestedInput } from '../../vehicle-model/dto/vehicle-model-unchecked-update-many-without-vehicles-brand-nested.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';


@InputType()
export class VehicleBrandUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Brand name must be a string' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Brand name is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    @Validator.Length(2, 50, { message: 'Brand name must be between 2 and 50 characters' })
    brandName?: string;

    @Field(() => Date, {nullable:true})
    @HideField()
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    @HideField()
    updatedAt?: Date | string;

    @Field(() => VehicleModelUncheckedUpdateManyWithoutVehiclesBrandNestedInput, {nullable:true})
    @ValidateNested()
    @Type(() => VehicleModelUncheckedUpdateManyWithoutVehiclesBrandNestedInput)
    vehicleModels?: VehicleModelUncheckedUpdateManyWithoutVehiclesBrandNestedInput;
}
