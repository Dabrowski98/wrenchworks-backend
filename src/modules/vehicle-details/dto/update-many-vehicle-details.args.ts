import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleDetailsUpdateManyMutationInput } from './vehicle-details-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleDetailsWhereInput } from './vehicle-details-where.input';

@ArgsType()
export class UpdateManyVehicleDetailsArgs {

    @Field(() => VehicleDetailsUpdateManyMutationInput, {nullable:false})
    @Type(() => VehicleDetailsUpdateManyMutationInput)
    @ValidateNested()
    data!: VehicleDetailsUpdateManyMutationInput;

    @Field(() => VehicleDetailsWhereInput, {nullable:true})
    @Type(() => VehicleDetailsWhereInput)
    where?: VehicleDetailsWhereInput;
}
