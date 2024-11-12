import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleBrandWhereUniqueInput } from './vehicle-brand-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueVehicleBrandOrThrowArgs {

    @Field(() => VehicleBrandWhereUniqueInput, {nullable:false})
    @Type(() => VehicleBrandWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleBrandWhereUniqueInput, 'brandName'>;
}
