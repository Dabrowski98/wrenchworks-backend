import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressUpdateWithoutUserInput } from './address-update-without-user.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { AddressCreateWithoutUserInput } from './address-create-without-user.input';
import { AddressWhereInput } from './address-where.input';

@InputType()
export class AddressUpsertWithoutUserInput {

    @Field(() => AddressUpdateWithoutUserInput, {nullable:false})
    @Type(() => AddressUpdateWithoutUserInput)
    @ValidateNested()
    update!: AddressUpdateWithoutUserInput;

    @Field(() => AddressCreateWithoutUserInput, {nullable:false})
    @Type(() => AddressCreateWithoutUserInput)
    @ValidateNested()
    create!: AddressCreateWithoutUserInput;

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    where?: AddressWhereInput;
}
