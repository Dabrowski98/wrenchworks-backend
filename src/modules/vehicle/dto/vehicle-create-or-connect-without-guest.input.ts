import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleCreateWithoutGuestInput } from './vehicle-create-without-guest.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class VehicleCreateOrConnectWithoutGuestInput {

    @Field(() => VehicleWhereUniqueInput, {nullable:false})
    @Type(() => VehicleWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>;

    @Field(() => VehicleCreateWithoutGuestInput, {nullable:false})
    @Type(() => VehicleCreateWithoutGuestInput)
    @ValidateNested()
    create!: VehicleCreateWithoutGuestInput;
}
