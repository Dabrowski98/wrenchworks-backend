import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerWhereInput } from './customer-where.input';
import { Type } from 'class-transformer';
import { CustomerUpdateWithoutGuestInput } from './customer-update-without-guest.input';

@InputType()
export class CustomerUpdateToOneWithWhereWithoutGuestInput {

    @Field(() => CustomerWhereInput, {nullable:true})
    @Type(() => CustomerWhereInput)
    where?: CustomerWhereInput;

    @Field(() => CustomerUpdateWithoutGuestInput, {nullable:false})
    @Type(() => CustomerUpdateWithoutGuestInput)
    data!: CustomerUpdateWithoutGuestInput;
}
