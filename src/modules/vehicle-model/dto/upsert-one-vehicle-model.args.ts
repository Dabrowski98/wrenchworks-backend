import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleModelWhereUniqueInput } from './vehicle-model-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleModelCreateInput } from './vehicle-model-create.input';
import { VehicleModelUpdateInput } from './vehicle-model-update.input';

@ArgsType()
export class UpsertOneVehicleModelArgs {

    @Field(() => VehicleModelWhereUniqueInput, {nullable:false})
    @Type(() => VehicleModelWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleModelWhereUniqueInput, 'modelId' | 'modelName_brand'>;

    @Field(() => VehicleModelCreateInput, {nullable:false})
    @Type(() => VehicleModelCreateInput)
    create!: VehicleModelCreateInput;

    @Field(() => VehicleModelUpdateInput, {nullable:false})
    @Type(() => VehicleModelUpdateInput)
    update!: VehicleModelUpdateInput;
}
