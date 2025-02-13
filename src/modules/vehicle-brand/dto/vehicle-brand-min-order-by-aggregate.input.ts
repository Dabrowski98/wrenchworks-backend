import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class VehicleBrandMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    brandName?: keyof typeof SortOrder;

    }