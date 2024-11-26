import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GuestCreateWithoutVehicleInput } from './guest-create-without-vehicle.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { GuestCreateOrConnectWithoutVehicleInput } from './guest-create-or-connect-without-vehicle.input';
import { GuestUpsertWithoutVehicleInput } from './guest-upsert-without-vehicle.input';
import { GuestWhereInput } from './guest-where.input';
import { Prisma } from '@prisma/client';
import { GuestWhereUniqueInput } from './guest-where-unique.input';
import { GuestUpdateToOneWithWhereWithoutVehicleInput } from './guest-update-to-one-with-where-without-vehicle.input';

@InputType()
export class GuestUpdateOneWithoutVehicleNestedInput {

    @Field(() => GuestCreateWithoutVehicleInput, {nullable:true})
    @Type(() => GuestCreateWithoutVehicleInput)
    @ValidateNested()
    create?: GuestCreateWithoutVehicleInput;

    @Field(() => GuestCreateOrConnectWithoutVehicleInput, {nullable:true})
    @Type(() => GuestCreateOrConnectWithoutVehicleInput)
    @ValidateNested()
    connectOrCreate?: GuestCreateOrConnectWithoutVehicleInput;

    @Field(() => GuestUpsertWithoutVehicleInput, {nullable:true})
    @Type(() => GuestUpsertWithoutVehicleInput)
    @ValidateNested()
    upsert?: GuestUpsertWithoutVehicleInput;

    @Field(() => GuestWhereInput, {nullable:true})
    @Type(() => GuestWhereInput)
    @ValidateNested()
    disconnect?: GuestWhereInput;

    @Field(() => GuestWhereInput, {nullable:true})
    @Type(() => GuestWhereInput)
    @ValidateNested()
    delete?: GuestWhereInput;

    @Field(() => GuestWhereUniqueInput, {nullable:true})
    @Type(() => GuestWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'guestId'>;

    @Field(() => GuestUpdateToOneWithWhereWithoutVehicleInput, {nullable:true})
    @Type(() => GuestUpdateToOneWithWhereWithoutVehicleInput)
    @ValidateNested()
    update?: GuestUpdateToOneWithWhereWithoutVehicleInput;
}
