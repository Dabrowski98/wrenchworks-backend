import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleModelScalarWhereInput } from './vehicle-model-scalar-where.input';
import { Type } from 'class-transformer';
import { VehicleModelUpdateManyMutationInput } from './vehicle-model-update-many-mutation.input';

@InputType()
export class VehicleModelUpdateManyWithWhereWithoutVehicleBrandInput {

    @Field(() => VehicleModelScalarWhereInput, {nullable:false})
    @Type(() => VehicleModelScalarWhereInput)
    where!: VehicleModelScalarWhereInput;

    @Field(() => VehicleModelUpdateManyMutationInput, {nullable:false})
    @Type(() => VehicleModelUpdateManyMutationInput)
    data!: VehicleModelUpdateManyMutationInput;
}
