import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GuestWhereUniqueInput } from './guest-where-unique.input';
import { Type } from 'class-transformer';
import { GuestCreateWithoutVehicleInput } from './guest-create-without-vehicle.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class GuestCreateOrConnectWithoutVehicleInput {

    @Field(() => GuestWhereUniqueInput, {nullable:false})
    @Type(() => GuestWhereUniqueInput)
    where!: Prisma.AtLeast<GuestWhereUniqueInput, 'guestId'>;

    @Field(() => GuestCreateWithoutVehicleInput, {nullable:false})
    @Type(() => GuestCreateWithoutVehicleInput)
    @ValidateNested()
    create!: GuestCreateWithoutVehicleInput;
}
