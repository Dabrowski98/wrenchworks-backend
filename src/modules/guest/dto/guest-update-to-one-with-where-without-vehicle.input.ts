import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GuestWhereInput } from './guest-where.input';
import { Type } from 'class-transformer';
import { GuestUpdateWithoutVehicleInput } from './guest-update-without-vehicle.input';

@InputType()
export class GuestUpdateToOneWithWhereWithoutVehicleInput {

    @Field(() => GuestWhereInput, {nullable:true})
    @Type(() => GuestWhereInput)
    where?: GuestWhereInput;

    @Field(() => GuestUpdateWithoutVehicleInput, {nullable:false})
    @Type(() => GuestUpdateWithoutVehicleInput)
    data!: GuestUpdateWithoutVehicleInput;
}
