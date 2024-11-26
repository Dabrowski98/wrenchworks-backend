import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { VehicleUncheckedCreateNestedManyWithoutVehicleModelInput } from '../../vehicle/dto/vehicle-unchecked-create-nested-many-without-vehicle-model.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';


@InputType()
export class VehicleModelUncheckedCreateWithoutVehiclesBrandInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
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

    @Field(() => VehicleUncheckedCreateNestedManyWithoutVehicleModelInput, {nullable:true})
    @Type(() => VehicleUncheckedCreateNestedManyWithoutVehicleModelInput)
    @ValidateNested()
    @Type(() => VehicleUncheckedCreateNestedManyWithoutVehicleModelInput)
    vehicles?: VehicleUncheckedCreateNestedManyWithoutVehicleModelInput;
}
