import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { VehicleUncheckedCreateNestedOneWithoutGuestInput } from '../../vehicle/dto/vehicle-unchecked-create-nested-one-without-guest.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceRequestUncheckedCreateNestedOneWithoutGuestInput } from '../../service-request/dto/service-request-unchecked-create-nested-one-without-guest.input';
import { CustomerUncheckedCreateNestedOneWithoutGuestInput } from '../../customer/dto/customer-unchecked-create-nested-one-without-guest.input';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';


@InputType()
export class GuestUncheckedCreateInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    guestId?: bigint | number;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'First name must be a string' })
    @Validator.Length(2, 30, { message: 'First name must be between 2 and 30 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'First name is required' })
    firstName!: string;

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

    @Field(() => VehicleUncheckedCreateNestedOneWithoutGuestInput, {nullable:true})
    @Type(() => VehicleUncheckedCreateNestedOneWithoutGuestInput)
    @ValidateNested()
    @Type(() => VehicleUncheckedCreateNestedOneWithoutGuestInput)
    vehicle?: VehicleUncheckedCreateNestedOneWithoutGuestInput;

    @Field(() => ServiceRequestUncheckedCreateNestedOneWithoutGuestInput, {nullable:true})
    @Type(() => ServiceRequestUncheckedCreateNestedOneWithoutGuestInput)
    @ValidateNested()
    @Type(() => ServiceRequestUncheckedCreateNestedOneWithoutGuestInput)
    serviceRequest?: ServiceRequestUncheckedCreateNestedOneWithoutGuestInput;

    @Field(() => CustomerUncheckedCreateNestedOneWithoutGuestInput, {nullable:true})
    @Type(() => CustomerUncheckedCreateNestedOneWithoutGuestInput)
    @ValidateNested()
    @Type(() => CustomerUncheckedCreateNestedOneWithoutGuestInput)
    customer?: CustomerUncheckedCreateNestedOneWithoutGuestInput;
}
