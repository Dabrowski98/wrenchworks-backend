import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import * as Validator from 'class-validator';
import { ServiceUncheckedCreateNestedManyWithoutCustomerInput } from '../../service/dto/service-unchecked-create-nested-many-without-customer.input';

@InputType()
export class CustomerUncheckedCreateInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    customerId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint | number;

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

    @Field(() => Date, {nullable:true})
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

    @Field(() => ServiceUncheckedCreateNestedManyWithoutCustomerInput, {nullable:true})
    @Type(() => ServiceUncheckedCreateNestedManyWithoutCustomerInput)
    services?: ServiceUncheckedCreateNestedManyWithoutCustomerInput;
}
