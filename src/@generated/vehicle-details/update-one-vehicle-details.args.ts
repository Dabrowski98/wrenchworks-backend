import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleDetailsUpdateInput } from './vehicle-details-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { VehicleDetailsWhereUniqueInput } from './vehicle-details-where-unique.input';

@ArgsType()
export class UpdateOneVehicleDetailsArgs {

    @Field(() => VehicleDetailsUpdateInput, {nullable:false})
    @Type(() => VehicleDetailsUpdateInput)
    data!: VehicleDetailsUpdateInput;

    @Field(() => VehicleDetailsWhereUniqueInput, {nullable:false})
    @Type(() => VehicleDetailsWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleDetailsWhereUniqueInput, 'vehicleId'>;
}
