import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleModelWhereUniqueInput } from './vehicle-model-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleModelUpdateWithoutVehiclesBrandInput } from './vehicle-model-update-without-vehicles-brand.input';
import { ValidateNested } from 'class-validator';
import { VehicleModelCreateWithoutVehiclesBrandInput } from './vehicle-model-create-without-vehicles-brand.input';

@InputType()
export class VehicleModelUpsertWithWhereUniqueWithoutVehiclesBrandInput {

    @Field(() => VehicleModelWhereUniqueInput, {nullable:false})
    @Type(() => VehicleModelWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleModelWhereUniqueInput, 'modelId' | 'modelName_brand'>;

    @Field(() => VehicleModelUpdateWithoutVehiclesBrandInput, {nullable:false})
    @Type(() => VehicleModelUpdateWithoutVehiclesBrandInput)
    @ValidateNested()
    update!: VehicleModelUpdateWithoutVehiclesBrandInput;

    @Field(() => VehicleModelCreateWithoutVehiclesBrandInput, {nullable:false})
    @Type(() => VehicleModelCreateWithoutVehiclesBrandInput)
    @ValidateNested()
    create!: VehicleModelCreateWithoutVehiclesBrandInput;
}
