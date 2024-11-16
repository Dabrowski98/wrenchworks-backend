import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { PersonUpdateManyWithoutAddressNestedInput } from '../../person/dto/person-update-many-without-address-nested.input';
import { Type } from 'class-transformer';
import { WorkshopUpdateManyWithoutAddressNestedInput } from '../../workshop/dto/workshop-update-many-without-address-nested.input';
import { CREATE, UPDATE } from 'src/constants/validation-groups';


@InputType()
export class AddressUpdateInput {

    @HideField()
    addressId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Country must be a string' })
    @Validator.Length(2, 30, { message: 'Country must be between 2 and 30 characters' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Country is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    country?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Region must be a string' })
    @Validator.Length(2, 30, { message: 'Region must be between 2 and 30 characters' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Region is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    region?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'City must be a string' })
    @Validator.Length(2, 30, { message: 'City must be between 2 and 30 characters' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'City is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    city?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Street must be a string' })
    @Validator.Length(2, 30, { message: 'Street must be between 2 and 30 characters' })
    @Validator.IsOptional()
    street?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Building number must be a string' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Building number is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    @Validator.Length(1, 6, { message: 'Building number must be between 1 and 6 characters' })
    buildingNo?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Flat number must be a string' })
    @Validator.Length(1, 6, { message: 'Flat number must be between 1 and 6 characters' })
    @Validator.IsOptional()
    flatNo?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Post code must be a string' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Post code is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    @Validator.Length(4, 10, { message: 'Post code must be between 4 and 10 characters' })
    postCode?: string;

    @Field(() => PersonUpdateManyWithoutAddressNestedInput, {nullable:true})
    @Type(() => PersonUpdateManyWithoutAddressNestedInput)
    persons?: PersonUpdateManyWithoutAddressNestedInput;

    @Field(() => WorkshopUpdateManyWithoutAddressNestedInput, {nullable:true})
    @Type(() => WorkshopUpdateManyWithoutAddressNestedInput)
    workshops?: WorkshopUpdateManyWithoutAddressNestedInput;
}