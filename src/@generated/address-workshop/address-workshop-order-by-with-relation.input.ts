import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AddressOrderByWithRelationInput } from '../address/address-order-by-with-relation.input';
import { WorkshopOrderByWithRelationInput } from '../workshop/workshop-order-by-with-relation.input';
import { Type } from 'class-transformer';

@InputType()
export class AddressWorkshopOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    addressId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => AddressOrderByWithRelationInput, {nullable:true})
    address?: AddressOrderByWithRelationInput;

    @Field(() => WorkshopOrderByWithRelationInput, {nullable:true})
    @Type(() => WorkshopOrderByWithRelationInput)
    workshop?: WorkshopOrderByWithRelationInput;
}
