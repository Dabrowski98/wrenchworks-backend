import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { VehicleUpdateManyWithoutVehicleModelNestedInput } from '../../vehicle/dto/vehicle-update-many-without-vehicle-model-nested.input';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';


@InputType()
export class VehicleModelUpdateWithoutVehicleBrandInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Model name must be a string' })
    @Validator.Length(2, 50, { message: 'Model name must be between 2 and 50 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Model name is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    modelName?: string;

    }