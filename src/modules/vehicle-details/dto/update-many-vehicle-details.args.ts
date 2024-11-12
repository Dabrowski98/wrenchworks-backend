import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleDetailsUpdateManyMutationInput } from './vehicle-details-update-many-mutation.input';
import { Type } from 'class-transformer';
import { VehicleDetailsWhereInput } from './vehicle-details-where.input';

@ArgsType()
export class UpdateManyVehicleDetailsArgs {

    @Field(() => VehicleDetailsUpdateManyMutationInput, {nullable:false})
    @Type(() => VehicleDetailsUpdateManyMutationInput)
    data!: VehicleDetailsUpdateManyMutationInput;

    @Field(() => VehicleDetailsWhereInput, {nullable:true})
    @Type(() => VehicleDetailsWhereInput)
    where?: VehicleDetailsWhereInput;
}
