import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';

@InputType()
export class WorkshopCreateManyInput {

    @HideField()
    workshopId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    personId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    addressId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsEmail({}, { message: 'Invalid email format' })
    email?: string;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Is verified must be a boolean' })
    isVerified?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Is managing work must be a boolean' })
    isManagingWork?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;
}
