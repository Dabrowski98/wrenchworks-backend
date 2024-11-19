import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWhereInput } from './address-where.input';
import { Type } from 'class-transformer';
import { AddressUpdateWithoutWorkshopsInput } from './address-update-without-workshops.input';
import { AddressCreateInput } from './address-create.input';
import * as Validator from 'class-validator';
@InputType()
export class AddressUpdateToOneWithWhereWithoutWorkshopsInput {

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
