import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleDetailsUpdateInput } from './vehicle-details-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { VehicleDetailsWhereUniqueInput } from './vehicle-details-where-unique.input';
import * as Validator from 'class-validator';

@ArgsType()
export class UpdateOneVehicleDetailsArgs {

    @Field(() => VehicleDetailsUpdateInput, {nullable:false})
    @Type(() => VehicleDetailsUpdateInput)
    @Validator.ValidateNested()
    data!: VehicleDetailsUpdateInput;

    @Field(() => VehicleDetailsWhereUniqueInput, {nullable:false})
    @Type(() => VehicleDetailsWhereUniqueInput)
    @Validator.Allow()
    where!: Prisma.AtLeast<VehicleDetailsWhereUniqueInput, 'vehicleDetailsId'>;
}
