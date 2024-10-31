import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonUpdateWithoutPersonAddressesInput } from './person-update-without-person-addresses.input';
import { Type } from 'class-transformer';
import { PersonCreateWithoutPersonAddressesInput } from './person-create-without-person-addresses.input';
import { PersonWhereInput } from './person-where.input';

@InputType()
export class PersonUpsertWithoutPersonAddressesInput {

    @Field(() => PersonUpdateWithoutPersonAddressesInput, {nullable:false})
    @Type(() => PersonUpdateWithoutPersonAddressesInput)
    update!: PersonUpdateWithoutPersonAddressesInput;

    @Field(() => PersonCreateWithoutPersonAddressesInput, {nullable:false})
    @Type(() => PersonCreateWithoutPersonAddressesInput)
    create!: PersonCreateWithoutPersonAddressesInput;

    @Field(() => PersonWhereInput, {nullable:true})
    @Type(() => PersonWhereInput)
    where?: PersonWhereInput;
}
