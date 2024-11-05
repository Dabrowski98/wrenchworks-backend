import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleDetailsCreateInput } from './vehicle-details-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneVehicleDetailsArgs {

    @Field(() => VehicleDetailsCreateInput, {nullable:true})
    @Type(() => VehicleDetailsCreateInput)
    data?: VehicleDetailsCreateInput;
}
