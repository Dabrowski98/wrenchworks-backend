import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleUncheckedCreateNestedManyWithoutVehicleBrandInput } from '../vehicle/vehicle-unchecked-create-nested-many-without-vehicle-brand.input';
import { Type } from 'class-transformer';

@InputType()
export class VehicleBrandUncheckedCreateWithoutVehicleModelsInput {

    @Field(() => String, {nullable:false})
    brandName!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => VehicleUncheckedCreateNestedManyWithoutVehicleBrandInput, {nullable:true})
    @Type(() => VehicleUncheckedCreateNestedManyWithoutVehicleBrandInput)
    vehicles?: VehicleUncheckedCreateNestedManyWithoutVehicleBrandInput;
}
