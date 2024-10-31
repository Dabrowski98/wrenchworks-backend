import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleDetailsWhereUniqueInput } from './vehicle-details-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleDetailsCreateInput } from './vehicle-details-create.input';
import { VehicleDetailsUpdateInput } from './vehicle-details-update.input';

@ArgsType()
export class UpsertOneVehicleDetailsArgs {

    @Field(() => VehicleDetailsWhereUniqueInput, {nullable:false})
    @Type(() => VehicleDetailsWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleDetailsWhereUniqueInput, 'vehicleId'>;

    @Field(() => VehicleDetailsCreateInput, {nullable:false})
    @Type(() => VehicleDetailsCreateInput)
    create!: VehicleDetailsCreateInput;

    @Field(() => VehicleDetailsUpdateInput, {nullable:false})
    @Type(() => VehicleDetailsUpdateInput)
    update!: VehicleDetailsUpdateInput;
}
