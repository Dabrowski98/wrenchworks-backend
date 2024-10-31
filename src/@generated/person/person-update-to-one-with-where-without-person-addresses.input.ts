import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonWhereInput } from './person-where.input';
import { Type } from 'class-transformer';
import { PersonUpdateWithoutPersonAddressesInput } from './person-update-without-person-addresses.input';

@InputType()
export class PersonUpdateToOneWithWhereWithoutPersonAddressesInput {

    @Field(() => PersonWhereInput, {nullable:true})
    @Type(() => PersonWhereInput)
    where?: PersonWhereInput;

    @Field(() => PersonUpdateWithoutPersonAddressesInput, {nullable:false})
    @Type(() => PersonUpdateWithoutPersonAddressesInput)
    data!: PersonUpdateWithoutPersonAddressesInput;
}
