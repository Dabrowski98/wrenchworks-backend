import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GuestWhereInput } from './guest-where.input';
import { Type } from 'class-transformer';
import { GuestUpdateWithoutCustomerInput } from './guest-update-without-customer.input';

@InputType()
export class GuestUpdateToOneWithWhereWithoutCustomerInput {

    @Field(() => GuestWhereInput, {nullable:true})
    @Type(() => GuestWhereInput)
    where?: GuestWhereInput;

    @Field(() => GuestUpdateWithoutCustomerInput, {nullable:false})
    @Type(() => GuestUpdateWithoutCustomerInput)
    data!: GuestUpdateWithoutCustomerInput;
}
