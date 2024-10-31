import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@InputType()
export class PersonCreateManyInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    personId?: bigint | number;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:true})
    telephoneNumber?: string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
}
