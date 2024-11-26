import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GuestCreateWithoutVehicleInput } from './guest-create-without-vehicle.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { GuestCreateOrConnectWithoutVehicleInput } from './guest-create-or-connect-without-vehicle.input';
import { Prisma } from '@prisma/client';
import { GuestWhereUniqueInput } from './guest-where-unique.input';

@InputType()
export class GuestCreateNestedOneWithoutVehicleInput {

    @Field(() => GuestCreateWithoutVehicleInput, {nullable:true})
    @Type(() => GuestCreateWithoutVehicleInput)
    @ValidateNested()
    create?: GuestCreateWithoutVehicleInput;

    @Field(() => GuestCreateOrConnectWithoutVehicleInput, {nullable:true})
    @Type(() => GuestCreateOrConnectWithoutVehicleInput)
    @ValidateNested()
    connectOrCreate?: GuestCreateOrConnectWithoutVehicleInput;

    @Field(() => GuestWhereUniqueInput, {nullable:true})
    @Type(() => GuestWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'guestId'>;
}
