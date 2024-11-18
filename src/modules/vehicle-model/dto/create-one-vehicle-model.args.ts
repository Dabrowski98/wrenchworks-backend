import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleModelCreateInput } from './vehicle-model-create.input';
import { Type } from 'class-transformer';
import * as Validator from 'class-validator';

@ArgsType()
export class CreateOneVehicleModelArgs {

    @Field(() => VehicleModelCreateInput, {nullable:false})
    @Type(() => VehicleModelCreateInput)
    @Validator.ValidateNested()
    data!: VehicleModelCreateInput;
}
