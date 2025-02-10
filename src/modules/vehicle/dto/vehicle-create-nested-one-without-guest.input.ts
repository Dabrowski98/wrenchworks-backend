import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutGuestInput } from './vehicle-create-without-guest.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleCreateOrConnectWithoutGuestInput } from './vehicle-create-or-connect-without-guest.input';
import { HideField } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';

@InputType()
export class VehicleCreateNestedOneWithoutGuestInput {

    @Field(() => VehicleCreateWithoutGuestInput, {nullable:true})
    @Type(() => VehicleCreateWithoutGuestInput)
    @ValidateNested()
    create?: VehicleCreateWithoutGuestInput;

    @HideField()
    connectOrCreate?: VehicleCreateOrConnectWithoutGuestInput;

    @HideField()
    connect?: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>;
}
