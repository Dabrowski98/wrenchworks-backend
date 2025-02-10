import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';

@InputType()
export class EmployeePermissionSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    permissionId?: keyof typeof SortOrder;
}
