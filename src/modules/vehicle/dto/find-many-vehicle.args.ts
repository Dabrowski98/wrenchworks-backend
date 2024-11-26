import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleWhereInput } from './vehicle-where.input';
import { Type } from 'class-transformer';
import { VehicleOrderByWithRelationInput } from './vehicle-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VehicleScalarFieldEnum } from './vehicle-scalar-field.enum';

@ArgsType()
export class FindManyVehicleArgs {

    @Field(() => VehicleWhereInput, {nullable:true})
    @Type(() => VehicleWhereInput)
    where?: VehicleWhereInput;

    @Field(() => [VehicleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VehicleOrderByWithRelationInput>;

    @Field(() => VehicleWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [VehicleScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof VehicleScalarFieldEnum>;
}
