import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleBrandUpdateInput } from './vehicle-brand-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { VehicleBrandWhereUniqueInput } from './vehicle-brand-where-unique.input';

@ArgsType()
export class UpdateOneVehicleBrandArgs {

    @Field(() => VehicleBrandUpdateInput, {nullable:false})
    @Type(() => VehicleBrandUpdateInput)
    data!: VehicleBrandUpdateInput;

    @Field(() => VehicleBrandWhereUniqueInput, {nullable:false})
    @Type(() => VehicleBrandWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleBrandWhereUniqueInput, 'brandName'>;
}
