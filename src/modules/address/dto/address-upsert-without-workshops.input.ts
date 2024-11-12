import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressUpdateWithoutWorkshopsInput } from './address-update-without-workshops.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutWorkshopsInput } from './address-create-without-workshops.input';
import { AddressWhereInput } from './address-where.input';

@InputType()
export class AddressUpsertWithoutWorkshopsInput {

    @Field(() => AddressUpdateWithoutWorkshopsInput, {nullable:false})
    @Type(() => AddressUpdateWithoutWorkshopsInput)
    update!: AddressUpdateWithoutWorkshopsInput;

    @Field(() => AddressCreateWithoutWorkshopsInput, {nullable:false})
    @Type(() => AddressCreateWithoutWorkshopsInput)
    create!: AddressCreateWithoutWorkshopsInput;

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    where?: AddressWhereInput;
}
