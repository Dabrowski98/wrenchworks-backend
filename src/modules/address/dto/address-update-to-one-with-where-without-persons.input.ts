import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWhereInput } from './address-where.input';
import { Type } from 'class-transformer';
import { AddressUpdateWithoutPersonsInput } from './address-update-without-persons.input';
import * as Validator from 'class-validator';
import { AddressCreateInput } from './address-create.input';

@InputType()
export class AddressUpdateToOneWithWhereWithoutPersonsInput {

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    @Validator.IsOptional()
    @Validator.Allow()
    where?: AddressWhereInput;

    @Field(() => AddressCreateInput, {nullable:false})
    @Type(() => AddressCreateInput)
    @Validator.ValidateNested()
    data!: AddressCreateInput;
}
