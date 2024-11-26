import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWhereInput } from './address-where.input';
import { Type } from 'class-transformer';
import { AddressUpdateWithoutWorkshopInput } from './address-update-without-workshop.input';

@InputType()
export class AddressUpdateToOneWithWhereWithoutWorkshopInput {

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    where?: AddressWhereInput;

    @Field(() => AddressUpdateWithoutWorkshopInput, {nullable:false})
    @Type(() => AddressUpdateWithoutWorkshopInput)
    data!: AddressUpdateWithoutWorkshopInput;
}
