import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { WorkshopOrderByWithRelationInput } from '../workshop/workshop-order-by-with-relation.input';
import { Type } from 'class-transformer';

@InputType()
export class WorkshopDetailsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopName?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    telephoneNumber?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    logoURL?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    status?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    NIP?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    deletedAt?: SortOrderInput;

    @Field(() => WorkshopOrderByWithRelationInput, {nullable:true})
    @Type(() => WorkshopOrderByWithRelationInput)
    workshop?: WorkshopOrderByWithRelationInput;
}
