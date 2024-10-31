import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressPersonWhereInput } from './address-person-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAddressPersonArgs {

    @Field(() => AddressPersonWhereInput, {nullable:true})
    @Type(() => AddressPersonWhereInput)
    where?: AddressPersonWhereInput;
}
