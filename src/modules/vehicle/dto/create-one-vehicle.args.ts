import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleCreateInput } from './vehicle-create.input';
import { Type } from 'class-transformer';
import * as Validator from 'class-validator';

@ArgsType()
export class CreateOneVehicleArgs {

    @Field(() => VehicleCreateInput, {nullable:false})
    @Type(() => VehicleCreateInput)
    @Validator.ValidateNested()
    data!: VehicleCreateInput;
}
