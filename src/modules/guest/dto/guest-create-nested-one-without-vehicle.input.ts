import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GuestCreateWithoutVehicleInput } from './guest-create-without-vehicle.input';
import { HideField } from '@nestjs/graphql';
import { GuestCreateOrConnectWithoutVehicleInput } from './guest-create-or-connect-without-vehicle.input';
import { Prisma } from '@prisma/client';
import { GuestWhereUniqueInput } from './guest-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class GuestCreateNestedOneWithoutVehicleInput {

    @HideField()
    create?: GuestCreateWithoutVehicleInput;

    @HideField()
    connectOrCreate?: GuestCreateOrConnectWithoutVehicleInput;

    @Field(() => GuestWhereUniqueInput, {nullable:true})
    @Type(() => GuestWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'guestId'>;
}
