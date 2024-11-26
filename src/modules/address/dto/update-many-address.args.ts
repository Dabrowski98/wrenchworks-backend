import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressUpdateManyMutationInput } from './address-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { AddressWhereInput } from './address-where.input';

@ArgsType()
export class UpdateManyAddressArgs {

    @Field(() => AddressUpdateManyMutationInput, {nullable:false})
    @Type(() => AddressUpdateManyMutationInput)
    @ValidateNested()
    data!: AddressUpdateManyMutationInput;

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    where?: AddressWhereInput;
}
