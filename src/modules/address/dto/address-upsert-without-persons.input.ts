import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressUpdateWithoutPersonsInput } from './address-update-without-persons.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutPersonsInput } from './address-create-without-persons.input';
import { AddressWhereInput } from './address-where.input';

@InputType()
export class AddressUpsertWithoutPersonsInput {

    @Field(() => AddressUpdateWithoutPersonsInput, {nullable:false})
    @Type(() => AddressUpdateWithoutPersonsInput)
    update!: AddressUpdateWithoutPersonsInput;

    @Field(() => AddressCreateWithoutPersonsInput, {nullable:false})
    @Type(() => AddressCreateWithoutPersonsInput)
    create!: AddressCreateWithoutPersonsInput;

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    where?: AddressWhereInput;
}
