import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@InputType()
export class AddressWorkshopAddressIdWorkshopIdCompoundUniqueInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    addressId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint | number;
}
