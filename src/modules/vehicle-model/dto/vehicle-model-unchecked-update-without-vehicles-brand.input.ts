import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { VehicleUncheckedUpdateManyWithoutVehicleModelNestedInput } from '../../vehicle/dto/vehicle-unchecked-update-many-without-vehicle-model-nested.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';


@InputType()
export class VehicleModelUncheckedUpdateWithoutVehiclesBrandInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    modelId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Model name must be a string' })
    @Validator.Length(2, 50, { message: 'Model name must be between 2 and 50 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Model name is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    modelName?: string;

    @Field(() => VehicleUncheckedUpdateManyWithoutVehicleModelNestedInput, {nullable:true})
    @Type(() => VehicleUncheckedUpdateManyWithoutVehicleModelNestedInput)
    @ValidateNested()
    @Type(() => VehicleUncheckedUpdateManyWithoutVehicleModelNestedInput)
    vehicles?: VehicleUncheckedUpdateManyWithoutVehicleModelNestedInput;
}