import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleModelWhereInput } from './vehicle-model-where.input';
import { Type } from 'class-transformer';
import { VehicleModelOrderByWithAggregationInput } from './vehicle-model-order-by-with-aggregation.input';
import { VehicleModelScalarFieldEnum } from './vehicle-model-scalar-field.enum';
import { VehicleModelScalarWhereWithAggregatesInput } from './vehicle-model-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { VehicleModelCountAggregateInput } from './vehicle-model-count-aggregate.input';
import { VehicleModelAvgAggregateInput } from './vehicle-model-avg-aggregate.input';
import { VehicleModelSumAggregateInput } from './vehicle-model-sum-aggregate.input';
import { VehicleModelMinAggregateInput } from './vehicle-model-min-aggregate.input';
import { VehicleModelMaxAggregateInput } from './vehicle-model-max-aggregate.input';

@ArgsType()
export class VehicleModelGroupByArgs {

    @Field(() => VehicleModelWhereInput, {nullable:true})
    @Type(() => VehicleModelWhereInput)
    where?: VehicleModelWhereInput;

    @Field(() => [VehicleModelOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<VehicleModelOrderByWithAggregationInput>;

    @Field(() => [VehicleModelScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof VehicleModelScalarFieldEnum>;

    @Field(() => VehicleModelScalarWhereWithAggregatesInput, {nullable:true})
    having?: VehicleModelScalarWhereWithAggregatesInput;

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
