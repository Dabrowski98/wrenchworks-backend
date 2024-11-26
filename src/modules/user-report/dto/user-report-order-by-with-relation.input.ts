import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { HideField } from '@nestjs/graphql';
import { UserOrderByWithRelationInput } from '../../user/dto/user-order-by-with-relation.input';
import { Type } from 'class-transformer';

@InputType()
export class UserReportOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    reportId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reportText?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reportType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reportedEntityType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reportedId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @HideField()
    createdAt?: SortOrderInput;

    @HideField()
    updatedAt?: SortOrderInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    user?: UserOrderByWithRelationInput;
}
