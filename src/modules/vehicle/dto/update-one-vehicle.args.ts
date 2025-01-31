import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleUpdateInput } from './vehicle-update.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';

@ArgsType()
export class UpdateOneVehicleArgs {

    @Field(() => VehicleUpdateInput, {nullable:false})
    @Type(() => VehicleUpdateInput)
    @ValidateNested()
    data!: VehicleUpdateInput;

    @Field(() => VehicleWhereUniqueInput, {nullable:false})
    @Type(() => VehicleWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>;
}
