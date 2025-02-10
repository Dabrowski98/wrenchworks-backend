import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { VehicleUpdateOneWithoutGuestNestedInput } from '../../vehicle/dto/vehicle-update-one-without-guest-nested.input';
import { ServiceRequestUpdateOneWithoutGuestNestedInput } from '../../service-request/dto/service-request-update-one-without-guest-nested.input';

@InputType()
export class GuestUpdateWithoutCustomerInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    guestId?: bigint | number;

    @HideField()
    firstName?: string;

    @HideField()
    telephoneNumber?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsEmail({}, { message: 'Invalid email format' })
    @Validator.IsOptional()
    email?: string;

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
    vehicle?: VehicleUpdateOneWithoutGuestNestedInput;

    @HideField()
    serviceRequest?: ServiceRequestUpdateOneWithoutGuestNestedInput;
}
