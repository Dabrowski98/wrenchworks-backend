import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonCreateNestedOneWithoutPersonAddressesInput } from '../person/person-create-nested-one-without-person-addresses.input';
import { Type } from 'class-transformer';

@InputType()
export class AddressPersonCreateWithoutAddressInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => PersonCreateNestedOneWithoutPersonAddressesInput, {nullable:false})
    @Type(() => PersonCreateNestedOneWithoutPersonAddressesInput)
    person!: PersonCreateNestedOneWithoutPersonAddressesInput;
}
