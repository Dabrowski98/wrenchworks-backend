import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class VehicleMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    vehicleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    personId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    brandName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    modelId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deletedAt?: keyof typeof SortOrder;
}
