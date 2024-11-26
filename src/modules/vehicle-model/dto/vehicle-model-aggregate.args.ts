import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleModelWhereInput } from './vehicle-model-where.input';
import { Type } from 'class-transformer';
import { VehicleModelOrderByWithRelationInput } from './vehicle-model-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { VehicleModelWhereUniqueInput } from './vehicle-model-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VehicleModelCountAggregateInput } from './vehicle-model-count-aggregate.input';
import { VehicleModelAvgAggregateInput } from './vehicle-model-avg-aggregate.input';
import { VehicleModelSumAggregateInput } from './vehicle-model-sum-aggregate.input';
import { VehicleModelMinAggregateInput } from './vehicle-model-min-aggregate.input';
import { VehicleModelMaxAggregateInput } from './vehicle-model-max-aggregate.input';

@ArgsType()
export class VehicleModelAggregateArgs {

    @Field(() => VehicleModelWhereInput, {nullable:true})
    @Type(() => VehicleModelWhereInput)
    where?: VehicleModelWhereInput;

    @Field(() => [VehicleModelOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VehicleModelOrderByWithRelationInput>;

    @Field(() => VehicleModelWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VehicleModelWhereUniqueInput, 'modelId' | 'modelName_brand'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => VehicleModelCountAggregateInput, {nullable:true})
    _count?: VehicleModelCountAggregateInput;

    @Field(() => VehicleModelAvgAggregateInput, {nullable:true})
    _avg?: VehicleModelAvgAggregateInput;

    @Field(() => VehicleModelSumAggregateInput, {nullable:true})
    _sum?: VehicleModelSumAggregateInput;

    @Field(() => VehicleModelMinAggregateInput, {nullable:true})
    _min?: VehicleModelMinAggregateInput;

    @Field(() => VehicleModelMaxAggregateInput, {nullable:true})
    _max?: VehicleModelMaxAggregateInput;
}
