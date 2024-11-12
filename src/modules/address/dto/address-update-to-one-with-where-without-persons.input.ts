import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWhereInput } from './address-where.input';
import { Type } from 'class-transformer';
import { AddressUpdateWithoutPersonsInput } from './address-update-without-persons.input';

@InputType()
export class AddressUpdateToOneWithWhereWithoutPersonsInput {

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    where?: AddressWhereInput;

    @Field(() => AddressUpdateWithoutPersonsInput, {nullable:false})
    @Type(() => AddressUpdateWithoutPersonsInput)
    data!: AddressUpdateWithoutPersonsInput;
}
