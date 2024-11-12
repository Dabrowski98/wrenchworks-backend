import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleBrandWhereInput } from './vehicle-brand-where.input';
import { Type } from 'class-transformer';
import { VehicleBrandOrderByWithAggregationInput } from './vehicle-brand-order-by-with-aggregation.input';
import { VehicleBrandScalarFieldEnum } from './vehicle-brand-scalar-field.enum';
import { VehicleBrandScalarWhereWithAggregatesInput } from './vehicle-brand-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { VehicleBrandCountAggregateInput } from './vehicle-brand-count-aggregate.input';
import { VehicleBrandMinAggregateInput } from './vehicle-brand-min-aggregate.input';
import { VehicleBrandMaxAggregateInput } from './vehicle-brand-max-aggregate.input';

@ArgsType()
export class VehicleBrandGroupByArgs {

    @Field(() => VehicleBrandWhereInput, {nullable:true})
    @Type(() => VehicleBrandWhereInput)
    where?: VehicleBrandWhereInput;

    @Field(() => [VehicleBrandOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<VehicleBrandOrderByWithAggregationInput>;

    @Field(() => [VehicleBrandScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof VehicleBrandScalarFieldEnum>;

    @Field(() => VehicleBrandScalarWhereWithAggregatesInput, {nullable:true})
    having?: VehicleBrandScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => VehicleBrandCountAggregateInput, {nullable:true})
    _count?: VehicleBrandCountAggregateInput;

    @Field(() => VehicleBrandMinAggregateInput, {nullable:true})
    _min?: VehicleBrandMinAggregateInput;

    @Field(() => VehicleBrandMaxAggregateInput, {nullable:true})
    _max?: VehicleBrandMaxAggregateInput;
}
