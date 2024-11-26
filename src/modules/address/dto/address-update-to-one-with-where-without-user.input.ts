import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWhereInput } from './address-where.input';
import { Type } from 'class-transformer';
import { AddressUpdateWithoutUserInput } from './address-update-without-user.input';

@InputType()
export class AddressUpdateToOneWithWhereWithoutUserInput {

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    where?: AddressWhereInput;

    @Field(() => AddressUpdateWithoutUserInput, {nullable:false})
    @Type(() => AddressUpdateWithoutUserInput)
    data!: AddressUpdateWithoutUserInput;
}
