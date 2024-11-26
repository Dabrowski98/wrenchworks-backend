import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleModelUpdateInput } from './vehicle-model-update.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Prisma } from '@prisma/client';
import { VehicleModelWhereUniqueInput } from './vehicle-model-where-unique.input';

@ArgsType()
export class UpdateOneVehicleModelArgs {

    @Field(() => VehicleModelUpdateInput, {nullable:false})
    @Type(() => VehicleModelUpdateInput)
    @ValidateNested()
    data!: VehicleModelUpdateInput;

    @Field(() => VehicleModelWhereUniqueInput, {nullable:false})
    @Type(() => VehicleModelWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleModelWhereUniqueInput, 'modelId' | 'modelName_brand'>;
}
