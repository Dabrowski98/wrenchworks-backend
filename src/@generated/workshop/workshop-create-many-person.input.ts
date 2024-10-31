import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@InputType()
export class WorkshopCreateManyPersonInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;

    @Field(() => Boolean, {nullable:true})
    isManagingWork?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
}
