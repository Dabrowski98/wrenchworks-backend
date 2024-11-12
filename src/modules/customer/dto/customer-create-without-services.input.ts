import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { PersonCreateNestedOneWithoutCustomersInput } from '../../person/dto/person-create-nested-one-without-customers.input';
import { WorkshopCreateNestedOneWithoutCustomersInput } from '../../workshop/dto/workshop-create-nested-one-without-customers.input';

@InputType()
export class CustomerCreateWithoutServicesInput {

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    @Validator.IsOptional()
    @Validator.IsNumber({}, { message: 'Total due must be a number' })
    @Validator.Min(0, { message: 'Total due cannot be negative' })
    @Validator.Max(9999999.99, { message: 'Total due cannot exceed 9999999.99' })
    totalDue?: Decimal;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Description must be a string' })
    @Validator.Length(0, 5000, { message: 'Description cannot exceed 5000 characters' })
    @Validator.IsOptional()
    description?: string;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'NIP must be a string' })
    @Validator.Length(10, 10, { message: 'NIP must be exactly 10 characters' })
    @Validator.Matches(/^[0-9]{10}$/, { message: 'NIP must contain exactly 10 digits' })
    @Validator.IsOptional()
    NIP?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Company name must be a string' })
    @Validator.Length(2, 30, { message: 'Company name must be between 2 and 30 characters' })
    @Validator.IsOptional()
    companyName?: string;

    @Field(() => PersonCreateNestedOneWithoutCustomersInput, {nullable:false})
    @Type(() => PersonCreateNestedOneWithoutCustomersInput)
    person!: PersonCreateNestedOneWithoutCustomersInput;

    @Field(() => WorkshopCreateNestedOneWithoutCustomersInput, {nullable:false})
    @Type(() => WorkshopCreateNestedOneWithoutCustomersInput)
    workshop!: WorkshopCreateNestedOneWithoutCustomersInput;
}
