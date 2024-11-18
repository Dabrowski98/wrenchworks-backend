import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleBrandUpdateInput } from './vehicle-brand-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { VehicleBrandWhereUniqueInput } from './vehicle-brand-where-unique.input';
import * as Validator from 'class-validator';

@ArgsType()
export class UpdateOneVehicleBrandArgs {

    @Field(() => VehicleBrandUpdateInput, {nullable:false})
    @Type(() => VehicleBrandUpdateInput)
    @Validator.ValidateNested()
    data!: VehicleBrandUpdateInput;

    @Field(() => VehicleBrandWhereUniqueInput, {nullable:false})
    @Type(() => VehicleBrandWhereUniqueInput)
    @Validator.Allow()  
    where!: Prisma.AtLeast<VehicleBrandWhereUniqueInput, 'brandName'>;
}
