import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleBrandWhereUniqueInput } from './vehicle-brand-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleBrandCreateInput } from './vehicle-brand-create.input';
import { VehicleBrandUpdateInput } from './vehicle-brand-update.input';

@ArgsType()
export class UpsertOneVehicleBrandArgs {

    @Field(() => VehicleBrandWhereUniqueInput, {nullable:false})
    @Type(() => VehicleBrandWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleBrandWhereUniqueInput, 'brandName'>;

    @Field(() => VehicleBrandCreateInput, {nullable:false})
    @Type(() => VehicleBrandCreateInput)
    create!: VehicleBrandCreateInput;

    @Field(() => VehicleBrandUpdateInput, {nullable:false})
    @Type(() => VehicleBrandUpdateInput)
    update!: VehicleBrandUpdateInput;
}
