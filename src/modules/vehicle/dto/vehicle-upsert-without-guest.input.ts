import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleUpdateWithoutGuestInput } from './vehicle-update-without-guest.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleCreateWithoutGuestInput } from './vehicle-create-without-guest.input';
import { VehicleWhereInput } from './vehicle-where.input';

@InputType()
export class VehicleUpsertWithoutGuestInput {

    @Field(() => VehicleUpdateWithoutGuestInput, {nullable:false})
    @Type(() => VehicleUpdateWithoutGuestInput)
    @ValidateNested()
    update!: VehicleUpdateWithoutGuestInput;

    @Field(() => VehicleCreateWithoutGuestInput, {nullable:false})
    @Type(() => VehicleCreateWithoutGuestInput)
    @ValidateNested()
    create!: VehicleCreateWithoutGuestInput;

    @Field(() => VehicleWhereInput, {nullable:true})
    @Type(() => VehicleWhereInput)
    where?: VehicleWhereInput;
}
