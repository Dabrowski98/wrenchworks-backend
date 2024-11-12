import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';

@InputType()
export class VehicleModelAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    modelId?: keyof typeof SortOrder;
}
