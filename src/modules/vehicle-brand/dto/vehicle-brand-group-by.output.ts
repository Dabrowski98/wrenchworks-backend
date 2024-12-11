import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { VehicleBrandCountAggregate } from './vehicle-brand-count-aggregate.output';
import { VehicleBrandMinAggregate } from './vehicle-brand-min-aggregate.output';
import { VehicleBrandMaxAggregate } from './vehicle-brand-max-aggregate.output';

@ObjectType()
export class VehicleBrandGroupBy {

    @Field(() => String, {nullable:false})
    brandName!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => VehicleBrandCountAggregate, {nullable:true})
    _count?: VehicleBrandCountAggregate;

    @Field(() => VehicleBrandMinAggregate, {nullable:true})
    _min?: VehicleBrandMinAggregate;

    @Field(() => VehicleBrandMaxAggregate, {nullable:true})
    _max?: VehicleBrandMaxAggregate;
}
