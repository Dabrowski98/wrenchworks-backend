import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { VehicleUncheckedCreateNestedManyWithoutVehicleModelInput } from '../../vehicle/dto/vehicle-unchecked-create-nested-many-without-vehicle-model.input';
import { Type } from 'class-transformer';
import { CREATE, UPDATE } from 'src/constants/validation-groups';


@InputType()
export class VehicleModelUncheckedCreateInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    modelId?: bigint | number;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Model name must be a string' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Model name is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    @Validator.Length(2, 50, { message: 'Model name must be between 2 and 50 characters' })
    modelName!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Brand name must be a string' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Brand name is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    @Validator.Length(2, 50, { message: 'Brand name must be between 2 and 50 characters' })
    brandName!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => VehicleUncheckedCreateNestedManyWithoutVehicleModelInput, {nullable:true})
    @Type(() => VehicleUncheckedCreateNestedManyWithoutVehicleModelInput)
    vehicles?: VehicleUncheckedCreateNestedManyWithoutVehicleModelInput;
}