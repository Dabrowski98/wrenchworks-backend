import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleDetailsWhereUniqueInput } from './vehicle-details-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneVehicleDetailsArgs {

    @Field(() => VehicleDetailsWhereUniqueInput, {nullable:false})
    @Type(() => VehicleDetailsWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleDetailsWhereUniqueInput, 'vehicleId'>;
}
