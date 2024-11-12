import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { ReviewOrderByRelationAggregateInput } from '../../review/dto/review-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { ReviewResponseOrderByRelationAggregateInput } from '../../review-response/dto/review-response-order-by-relation-aggregate.input';
import { UserReportOrderByRelationAggregateInput } from '../../user-report/dto/user-report-order-by-relation-aggregate.input';
import { PersonOrderByWithRelationInput } from '../../person/dto/person-order-by-with-relation.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    personId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    email?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    avatarURL?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    isVerified?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    status?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updatedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    deletedAt?: SortOrderInput;

    @Field(() => ReviewOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ReviewOrderByRelationAggregateInput)
    reviews?: ReviewOrderByRelationAggregateInput;

    @Field(() => ReviewResponseOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ReviewResponseOrderByRelationAggregateInput)
    reviewResponses?: ReviewResponseOrderByRelationAggregateInput;

    @Field(() => UserReportOrderByRelationAggregateInput, {nullable:true})
    userReports?: UserReportOrderByRelationAggregateInput;

    @Field(() => PersonOrderByWithRelationInput, {nullable:true})
    @Type(() => PersonOrderByWithRelationInput)
    person?: PersonOrderByWithRelationInput;
}
