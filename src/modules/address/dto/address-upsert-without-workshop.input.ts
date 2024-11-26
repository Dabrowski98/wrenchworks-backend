import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressUpdateWithoutWorkshopInput } from './address-update-without-workshop.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { AddressCreateWithoutWorkshopInput } from './address-create-without-workshop.input';
import { AddressWhereInput } from './address-where.input';

@InputType()
export class AddressUpsertWithoutWorkshopInput {

    @Field(() => AddressUpdateWithoutWorkshopInput, {nullable:false})
    @Type(() => AddressUpdateWithoutWorkshopInput)
    @ValidateNested()
    update!: AddressUpdateWithoutWorkshopInput;

    @Field(() => AddressCreateWithoutWorkshopInput, {nullable:false})
    @Type(() => AddressCreateWithoutWorkshopInput)
    @ValidateNested()
    create!: AddressCreateWithoutWorkshopInput;

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    where?: AddressWhereInput;
}
