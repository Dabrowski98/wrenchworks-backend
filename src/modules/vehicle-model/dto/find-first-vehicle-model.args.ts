import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleModelWhereInput } from './vehicle-model-where.input';
import { Type } from 'class-transformer';
import { VehicleModelOrderByWithRelationInput } from './vehicle-model-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { VehicleModelWhereUniqueInput } from './vehicle-model-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VehicleModelScalarFieldEnum } from './vehicle-model-scalar-field.enum';

@ArgsType()
export class FindFirstVehicleModelArgs {

    @Field(() => VehicleModelWhereInput, {nullable:true})
    @Type(() => VehicleModelWhereInput)
    where?: VehicleModelWhereInput;

    @Field(() => [VehicleModelOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VehicleModelOrderByWithRelationInput>;

    @Field(() => VehicleModelWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VehicleModelWhereUniqueInput, 'modelId' | 'modelName_brandName'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [VehicleModelScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof VehicleModelScalarFieldEnum>;
}
