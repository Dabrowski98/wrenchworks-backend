import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';

@InputType()
export class PersonUncheckedUpdateManyInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    personId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'First name must be a string' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'First name is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    @Validator.Length(2, 30, { message: 'First name must be between 2 and 30 characters' })
    firstName?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Last name must be a string' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Last name is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    @Validator.Length(2, 30, { message: 'Last name must be between 2 and 30 characters' })
    lastName?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Telephone number must be a string' })
    @Validator.Length(8, 12, { message: 'Telephone number must be between 8 and 12 characters' })
    @Validator.Matches(/^\+?[0-9]{8, 12}$/, { message: 'Invalid telephone number format' })
    @Validator.IsOptional()
    telephoneNumber?: string;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    addressId?: bigint | number;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
}
