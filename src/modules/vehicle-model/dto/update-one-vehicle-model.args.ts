import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleModelUpdateInput } from './vehicle-model-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { VehicleModelWhereUniqueInput } from './vehicle-model-where-unique.input';
import * as Validator from 'class-validator';

@ArgsType()
export class UpdateOneVehicleModelArgs {

    @Field(() => VehicleModelUpdateInput, {nullable:false})
    @Type(() => VehicleModelUpdateInput)
    @Validator.ValidateNested()
    data!: VehicleModelUpdateInput;

    @Field(() => VehicleModelWhereUniqueInput, {nullable:false})
    @Type(() => VehicleModelWhereUniqueInput)
    @Validator.Allow()
    where!: Prisma.AtLeast<VehicleModelWhereUniqueInput, 'modelId'>;
}
