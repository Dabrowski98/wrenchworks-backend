import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleDetailsCreateInput } from './vehicle-details-create.input';
import { Type } from 'class-transformer';
import * as Validator from 'class-validator';

@ArgsType()
export class CreateOneVehicleDetailsArgs {

    @Field(() => VehicleDetailsCreateInput, {nullable:true})
    @Type(() => VehicleDetailsCreateInput)
    @Validator.ValidateNested()
    data?: VehicleDetailsCreateInput;
}
