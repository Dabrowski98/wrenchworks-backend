import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { HideField } from 'nestjs-graphql';

@InputType()
export class WorkshopMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ownerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    addressId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    telephoneNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isVerified?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isManagingWork?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isOfferingService?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    @HideField()
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    @HideField()
    updatedBy?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    @HideField()
    deletedAt?: keyof typeof SortOrder;
}
