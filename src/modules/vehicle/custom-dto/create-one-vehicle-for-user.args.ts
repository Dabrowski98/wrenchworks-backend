import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CreateVehicleForUserInput } from './create-vehicle-for-user.input';

@ArgsType()
export class CreateOneVehicleForUserArgs {

    @Field(() => CreateVehicleForUserInput, {nullable:false})
    @Type(() => CreateVehicleForUserInput)
    @ValidateNested()
    data!: CreateVehicleForUserInput;
}
