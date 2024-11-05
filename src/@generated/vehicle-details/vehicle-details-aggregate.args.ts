import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleDetailsWhereInput } from './vehicle-details-where.input';
import { Type } from 'class-transformer';
import { VehicleDetailsOrderByWithRelationInput } from './vehicle-details-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { VehicleDetailsWhereUniqueInput } from './vehicle-details-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VehicleDetailsCountAggregateInput } from './vehicle-details-count-aggregate.input';
import { VehicleDetailsAvgAggregateInput } from './vehicle-details-avg-aggregate.input';
import { VehicleDetailsSumAggregateInput } from './vehicle-details-sum-aggregate.input';
import { VehicleDetailsMinAggregateInput } from './vehicle-details-min-aggregate.input';
import { VehicleDetailsMaxAggregateInput } from './vehicle-details-max-aggregate.input';

@ArgsType()
export class VehicleDetailsAggregateArgs {

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

    @Field(() => VehicleDetailsCountAggregateInput, {nullable:true})
    _count?: VehicleDetailsCountAggregateInput;

    @Field(() => VehicleDetailsAvgAggregateInput, {nullable:true})
    _avg?: VehicleDetailsAvgAggregateInput;

    @Field(() => VehicleDetailsSumAggregateInput, {nullable:true})
    _sum?: VehicleDetailsSumAggregateInput;

    @Field(() => VehicleDetailsMinAggregateInput, {nullable:true})
    _min?: VehicleDetailsMinAggregateInput;

    @Field(() => VehicleDetailsMaxAggregateInput, {nullable:true})
    _max?: VehicleDetailsMaxAggregateInput;
}
