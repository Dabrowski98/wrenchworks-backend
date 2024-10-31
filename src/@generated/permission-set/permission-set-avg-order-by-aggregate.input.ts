import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PermissionSetAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    permissionSetId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;
}