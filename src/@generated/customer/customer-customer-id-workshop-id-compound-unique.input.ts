import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@InputType()
export class CustomerCustomerIdWorkshopIdCompoundUniqueInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    customerId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint | number;
}
