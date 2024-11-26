import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleWhereInput } from './vehicle-where.input';
import { Type } from 'class-transformer';
import { VehicleUpdateWithoutGuestInput } from './vehicle-update-without-guest.input';

@InputType()
export class VehicleUpdateToOneWithWhereWithoutGuestInput {

    @Field(() => VehicleWhereInput, {nullable:true})
    @Type(() => VehicleWhereInput)
    where?: VehicleWhereInput;

    @Field(() => VehicleUpdateWithoutGuestInput, {nullable:false})
    @Type(() => VehicleUpdateWithoutGuestInput)
    data!: VehicleUpdateWithoutGuestInput;
}
