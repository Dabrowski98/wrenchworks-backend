import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWhereInput } from './address-where.input';
import { Type } from 'class-transformer';
import { AddressUpdateWithoutWorkshopsInput } from './address-update-without-workshops.input';

@InputType()
export class AddressUpdateToOneWithWhereWithoutWorkshopsInput {

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    where?: AddressWhereInput;

    @Field(() => AddressUpdateWithoutWorkshopsInput, {nullable:false})
    @Type(() => AddressUpdateWithoutWorkshopsInput)
    data!: AddressUpdateWithoutWorkshopsInput;
}
