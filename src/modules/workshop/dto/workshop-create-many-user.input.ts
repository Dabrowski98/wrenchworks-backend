import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';


@InputType()
export class WorkshopCreateManyUserInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    @Validator.IsOptional()
    addressId?: bigint | number;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail({}, { message: 'Invalid email format' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Email is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    email!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Telephone number must be a string' })
    @Validator.Length(8, 12, { message: 'Telephone number must be between 8 and 12 characters' })
    @Validator.Matches(/^\+?[0-9]+$/, { message: 'Invalid telephone number format' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Telephone number is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    telephoneNumber!: string;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Is managing work must be a boolean' })
    @Validator.IsOptional()
    isManagingWork?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Is managing work must be a boolean' })
    @Validator.IsOptional()
    isOfferingService?: boolean;

    }