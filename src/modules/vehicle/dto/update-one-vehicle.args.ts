import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleUpdateInput } from './vehicle-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import * as Validator from 'class-validator';

@ArgsType()
export class UpdateOneVehicleArgs {

    @Field(() => VehicleUpdateInput, {nullable:false})
    @Type(() => VehicleUpdateInput)
    @Validator.ValidateNested()
    data!: VehicleUpdateInput;

    @Field(() => VehicleWhereUniqueInput, {nullable:false})
    @Type(() => VehicleWhereUniqueInput)
    @Validator.Allow()  
    where!: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId'>;
}
