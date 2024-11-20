import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { VehicleUncheckedUpdateManyWithoutVehicleModelNestedInput } from '../../vehicle/dto/vehicle-unchecked-update-many-without-vehicle-model-nested.input';
import { Type } from 'class-transformer';


@InputType()
export class VehicleModelUncheckedUpdateWithoutVehiclesBrandInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
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

    @Field(() => VehicleUncheckedUpdateManyWithoutVehicleModelNestedInput, {nullable:true})
    @Type(() => VehicleUncheckedUpdateManyWithoutVehicleModelNestedInput)
    vehicles?: VehicleUncheckedUpdateManyWithoutVehicleModelNestedInput;
}
