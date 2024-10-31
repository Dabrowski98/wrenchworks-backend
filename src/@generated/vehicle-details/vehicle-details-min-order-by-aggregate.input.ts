import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class VehicleDetailsMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    vehicleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    yearOfProduction?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    VIN?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    engineCapacity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    licensePlate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fuelType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    engineNo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bodyColor?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deletedAt?: keyof typeof SortOrder;
}