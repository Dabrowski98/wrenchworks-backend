import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { CustomerCreationSource } from '../../prisma/dto/customer-creation-source.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { ServiceCreateNestedManyWithoutCustomerInput } from '../../service/dto/service-create-nested-many-without-customer.input';
import { ValidateNested } from 'class-validator';
import { GuestCreateNestedOneWithoutCustomerInput } from '../../guest/dto/guest-create-nested-one-without-customer.input';
import { UserCreateNestedOneWithoutCustomersInput } from '../../user/dto/user-create-nested-one-without-customers.input';
import { WorkshopCreateNestedOneWithoutCustomersInput } from '../../workshop/dto/workshop-create-nested-one-without-customers.input';

@InputType()
export class CustomerCreateWithoutVehiclesInput {

    @HideField()
    customerId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'First name must be a string' })
    @Validator.Length(2, 30, { message: 'First name must be between 2 and 30 characters' })
    @Validator.IsOptional()
    firstName?: string;

    @Field(() => CustomerCreationSource, {nullable:false})
    creationSource!: keyof typeof CustomerCreationSource;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Telephone number must be a string' })
    @Validator.Length(8, 12, { message: 'Telephone number must be between 8 and 12 characters' })
    @Validator.Matches(/^\+?[0-9]+$/, { message: 'Invalid telephone number format' })
    @Validator.IsOptional()
    telephoneNumber?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsEmail({}, { message: 'Invalid email format' })
    @Validator.IsOptional()
    email?: string;

    @HideField()
    isVerified?: boolean;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    @Validator.IsNumber({}, { message: 'Total due must be a number' })
    @Validator.Min(0, { message: 'Total due cannot be negative' })
    @Validator.Max(9999999.99, { message: 'Total due cannot exceed 9999999.99' })
    @Validator.IsOptional()
    totalDue?: Decimal;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Description must be a string' })
    @Validator.Length(0, 5000, { message: 'Description cannot exceed 5000 characters' })
    @Validator.IsOptional()
    description?: string;

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

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    createdBy?: bigint | number;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    updatedBy?: bigint | number;

    @Field(() => ServiceCreateNestedManyWithoutCustomerInput, {nullable:true})
    @Type(() => ServiceCreateNestedManyWithoutCustomerInput)
    @ValidateNested()
    @Type(() => ServiceCreateNestedManyWithoutCustomerInput)
    services?: ServiceCreateNestedManyWithoutCustomerInput;

    @Field(() => GuestCreateNestedOneWithoutCustomerInput, {nullable:true})
    @Type(() => GuestCreateNestedOneWithoutCustomerInput)
    guest?: GuestCreateNestedOneWithoutCustomerInput;

    @Field(() => UserCreateNestedOneWithoutCustomersInput, {nullable:true})
    @Type(() => UserCreateNestedOneWithoutCustomersInput)
    @ValidateNested()
    user?: UserCreateNestedOneWithoutCustomersInput;

    @Field(() => WorkshopCreateNestedOneWithoutCustomersInput, {nullable:false})
    @Type(() => WorkshopCreateNestedOneWithoutCustomersInput)
    @ValidateNested()
    @Type(() => WorkshopCreateNestedOneWithoutCustomersInput)
    workshop!: WorkshopCreateNestedOneWithoutCustomersInput;
}
