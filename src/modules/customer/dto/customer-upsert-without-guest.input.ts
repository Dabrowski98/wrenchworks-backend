import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerUpdateWithoutGuestInput } from './customer-update-without-guest.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CustomerCreateWithoutGuestInput } from './customer-create-without-guest.input';
import { CustomerWhereInput } from './customer-where.input';

@InputType()
export class CustomerUpsertWithoutGuestInput {

    @Field(() => CustomerUpdateWithoutGuestInput, {nullable:false})
    @Type(() => CustomerUpdateWithoutGuestInput)
    @ValidateNested()
    update!: CustomerUpdateWithoutGuestInput;

    @Field(() => CustomerCreateWithoutGuestInput, {nullable:false})
    @Type(() => CustomerCreateWithoutGuestInput)
    @ValidateNested()
    create!: CustomerCreateWithoutGuestInput;

    @Field(() => CustomerWhereInput, {nullable:true})
    @Type(() => CustomerWhereInput)
    where?: CustomerWhereInput;
}
