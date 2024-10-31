import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@InputType()
export class AddressWorkshopUncheckedCreateWithoutWorkshopInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    addressId!: bigint | number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
