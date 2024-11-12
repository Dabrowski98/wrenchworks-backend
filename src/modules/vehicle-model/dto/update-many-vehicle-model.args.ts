import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleModelUpdateManyMutationInput } from './vehicle-model-update-many-mutation.input';
import { Type } from 'class-transformer';
import { VehicleModelWhereInput } from './vehicle-model-where.input';

@ArgsType()
export class UpdateManyVehicleModelArgs {

    @Field(() => VehicleModelUpdateManyMutationInput, {nullable:false})
    @Type(() => VehicleModelUpdateManyMutationInput)
    data!: VehicleModelUpdateManyMutationInput;

    @Field(() => VehicleModelWhereInput, {nullable:true})
    @Type(() => VehicleModelWhereInput)
    where?: VehicleModelWhereInput;
}
