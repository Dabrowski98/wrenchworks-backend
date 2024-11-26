import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleBrandUpdateManyMutationInput } from './vehicle-brand-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleBrandWhereInput } from './vehicle-brand-where.input';

@ArgsType()
export class UpdateManyVehicleBrandArgs {

    @Field(() => VehicleBrandUpdateManyMutationInput, {nullable:false})
    @Type(() => VehicleBrandUpdateManyMutationInput)
    @ValidateNested()
    data!: VehicleBrandUpdateManyMutationInput;

    @Field(() => VehicleBrandWhereInput, {nullable:true})
    @Type(() => VehicleBrandWhereInput)
    where?: VehicleBrandWhereInput;
}
