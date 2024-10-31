import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AddressOrderByWithRelationInput } from '../address/address-order-by-with-relation.input';
import { PersonOrderByWithRelationInput } from '../person/person-order-by-with-relation.input';
import { Type } from 'class-transformer';

@InputType()
export class AddressPersonOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    addressId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    personId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => AddressOrderByWithRelationInput, {nullable:true})
    address?: AddressOrderByWithRelationInput;

    @Field(() => PersonOrderByWithRelationInput, {nullable:true})
    @Type(() => PersonOrderByWithRelationInput)
    person?: PersonOrderByWithRelationInput;
}
