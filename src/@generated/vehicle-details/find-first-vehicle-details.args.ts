import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleDetailsWhereInput } from './vehicle-details-where.input';
import { Type } from 'class-transformer';
import { VehicleDetailsOrderByWithRelationInput } from './vehicle-details-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { VehicleDetailsWhereUniqueInput } from './vehicle-details-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VehicleDetailsScalarFieldEnum } from './vehicle-details-scalar-field.enum';

@ArgsType()
export class FindFirstVehicleDetailsArgs {

    @Field(() => VehicleDetailsWhereInput, {nullable:true})
    @Type(() => VehicleDetailsWhereInput)
    where?: VehicleDetailsWhereInput;

    @Field(() => [VehicleDetailsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VehicleDetailsOrderByWithRelationInput>;

    @Field(() => VehicleDetailsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VehicleDetailsWhereUniqueInput, 'vehicleDetailsId' | 'vehicleId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [VehicleDetailsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof VehicleDetailsScalarFieldEnum>;
}
