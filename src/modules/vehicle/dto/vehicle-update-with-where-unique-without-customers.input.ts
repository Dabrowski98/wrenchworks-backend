import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleUpdateWithoutCustomersInput } from './vehicle-update-without-customers.input';

@InputType()
export class VehicleUpdateWithWhereUniqueWithoutCustomersInput {

    @Field(() => VehicleWhereUniqueInput, {nullable:false})
    @Type(() => VehicleWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>;

    @Field(() => VehicleUpdateWithoutCustomersInput, {nullable:false})
    @Type(() => VehicleUpdateWithoutCustomersInput)
    data!: VehicleUpdateWithoutCustomersInput;
}
