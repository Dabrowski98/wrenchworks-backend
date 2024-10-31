import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@InputType()
export class AddressWorkshopUncheckedCreateInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    addressId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint | number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}