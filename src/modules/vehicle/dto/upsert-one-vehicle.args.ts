import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleCreateInput } from './vehicle-create.input';
import { VehicleUpdateInput } from './vehicle-update.input';

@ArgsType()
export class UpsertOneVehicleArgs {

    @Field(() => VehicleWhereUniqueInput, {nullable:false})
    @Type(() => VehicleWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId'>;

    @Field(() => VehicleCreateInput, {nullable:false})
    @Type(() => VehicleCreateInput)
    create!: VehicleCreateInput;

    @Field(() => VehicleUpdateInput, {nullable:false})
    @Type(() => VehicleUpdateInput)
    update!: VehicleUpdateInput;
}
