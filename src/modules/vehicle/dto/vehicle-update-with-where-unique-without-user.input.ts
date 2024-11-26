import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleUpdateWithoutUserInput } from './vehicle-update-without-user.input';

@InputType()
export class VehicleUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => VehicleWhereUniqueInput, {nullable:false})
    @Type(() => VehicleWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>;

    @Field(() => VehicleUpdateWithoutUserInput, {nullable:false})
    @Type(() => VehicleUpdateWithoutUserInput)
    data!: VehicleUpdateWithoutUserInput;
}
