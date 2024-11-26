import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleBrandCreateInput } from './vehicle-brand-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneVehicleBrandArgs {

    @Field(() => VehicleBrandCreateInput, {nullable:false})
    @Type(() => VehicleBrandCreateInput)
    @ValidateNested()
    data!: VehicleBrandCreateInput;
}
