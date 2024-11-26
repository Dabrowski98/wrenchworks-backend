import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GuestUpdateWithoutVehicleInput } from './guest-update-without-vehicle.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { GuestCreateWithoutVehicleInput } from './guest-create-without-vehicle.input';
import { GuestWhereInput } from './guest-where.input';

@InputType()
export class GuestUpsertWithoutVehicleInput {

    @Field(() => GuestUpdateWithoutVehicleInput, {nullable:false})
    @Type(() => GuestUpdateWithoutVehicleInput)
    @ValidateNested()
    update!: GuestUpdateWithoutVehicleInput;

    @Field(() => GuestCreateWithoutVehicleInput, {nullable:false})
    @Type(() => GuestCreateWithoutVehicleInput)
    @ValidateNested()
    create!: GuestCreateWithoutVehicleInput;

    @Field(() => GuestWhereInput, {nullable:true})
    @Type(() => GuestWhereInput)
    where?: GuestWhereInput;
}
