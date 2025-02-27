import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleUpdateManyMutationInput } from './vehicle-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleWhereInput } from './vehicle-where.input';

@ArgsType()
export class UpdateManyVehicleArgs {

    @Field(() => VehicleUpdateManyMutationInput, {nullable:false})
    @Type(() => VehicleUpdateManyMutationInput)
    @ValidateNested()
    data!: VehicleUpdateManyMutationInput;

    @Field(() => VehicleWhereInput, {nullable:true})
    @Type(() => VehicleWhereInput)
    where?: VehicleWhereInput;
}
