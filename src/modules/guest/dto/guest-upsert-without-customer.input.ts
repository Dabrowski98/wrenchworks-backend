import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GuestUpdateWithoutCustomerInput } from './guest-update-without-customer.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { GuestCreateWithoutCustomerInput } from './guest-create-without-customer.input';
import { GuestWhereInput } from './guest-where.input';

@InputType()
export class GuestUpsertWithoutCustomerInput {

    @Field(() => GuestUpdateWithoutCustomerInput, {nullable:false})
    @Type(() => GuestUpdateWithoutCustomerInput)
    @ValidateNested()
    update!: GuestUpdateWithoutCustomerInput;

    @Field(() => GuestCreateWithoutCustomerInput, {nullable:false})
    @Type(() => GuestCreateWithoutCustomerInput)
    @ValidateNested()
    create!: GuestCreateWithoutCustomerInput;

    @Field(() => GuestWhereInput, {nullable:true})
    @Type(() => GuestWhereInput)
    where?: GuestWhereInput;
}
