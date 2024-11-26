import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleDetailsCreateInput } from './vehicle-details-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneVehicleDetailsArgs {

    @Field(() => VehicleDetailsCreateInput, {nullable:false})
    @Type(() => VehicleDetailsCreateInput)
    @ValidateNested()
    data!: VehicleDetailsCreateInput;
}
