import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleBrandWhereInput } from './vehicle-brand-where.input';
import { Type } from 'class-transformer';
import { VehicleBrandOrderByWithRelationInput } from './vehicle-brand-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { VehicleBrandWhereUniqueInput } from './vehicle-brand-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VehicleBrandScalarFieldEnum } from './vehicle-brand-scalar-field.enum';

@ArgsType()
export class FindFirstVehicleBrandOrThrowArgs {

    @Field(() => VehicleBrandWhereInput, {nullable:true})
    @Type(() => VehicleBrandWhereInput)
    where?: VehicleBrandWhereInput;

    @Field(() => [VehicleBrandOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VehicleBrandOrderByWithRelationInput>;

    @Field(() => VehicleBrandWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VehicleBrandWhereUniqueInput, 'brandName'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [VehicleBrandScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof VehicleBrandScalarFieldEnum>;
}
