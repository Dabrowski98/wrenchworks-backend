import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleWhereInput } from './vehicle-where.input';
import { Type } from 'class-transformer';
import { VehicleOrderByWithAggregationInput } from './vehicle-order-by-with-aggregation.input';
import { VehicleScalarFieldEnum } from './vehicle-scalar-field.enum';
import { VehicleScalarWhereWithAggregatesInput } from './vehicle-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { VehicleCountAggregateInput } from './vehicle-count-aggregate.input';
import { VehicleAvgAggregateInput } from './vehicle-avg-aggregate.input';
import { VehicleSumAggregateInput } from './vehicle-sum-aggregate.input';
import { VehicleMinAggregateInput } from './vehicle-min-aggregate.input';
import { VehicleMaxAggregateInput } from './vehicle-max-aggregate.input';

@ArgsType()
export class VehicleGroupByArgs {

    @Field(() => VehicleWhereInput, {nullable:true})
    @Type(() => VehicleWhereInput)
    where?: VehicleWhereInput;

    @Field(() => [VehicleOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<VehicleOrderByWithAggregationInput>;

    @Field(() => [VehicleScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof VehicleScalarFieldEnum>;

    @Field(() => VehicleScalarWhereWithAggregatesInput, {nullable:true})
    having?: VehicleScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => VehicleCountAggregateInput, {nullable:true})
    _count?: VehicleCountAggregateInput;

    @Field(() => VehicleAvgAggregateInput, {nullable:true})
    _avg?: VehicleAvgAggregateInput;

    @Field(() => VehicleSumAggregateInput, {nullable:true})
    _sum?: VehicleSumAggregateInput;

    @Field(() => VehicleMinAggregateInput, {nullable:true})
    _min?: VehicleMinAggregateInput;

    @Field(() => VehicleMaxAggregateInput, {nullable:true})
    _max?: VehicleMaxAggregateInput;
}
