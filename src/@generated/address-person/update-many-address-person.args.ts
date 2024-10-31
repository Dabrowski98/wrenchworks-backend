import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressPersonUpdateManyMutationInput } from './address-person-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AddressPersonWhereInput } from './address-person-where.input';

@ArgsType()
export class UpdateManyAddressPersonArgs {

    @Field(() => AddressPersonUpdateManyMutationInput, {nullable:false})
    @Type(() => AddressPersonUpdateManyMutationInput)
    data!: AddressPersonUpdateManyMutationInput;

    @Field(() => AddressPersonWhereInput, {nullable:true})
    @Type(() => AddressPersonWhereInput)
    where?: AddressPersonWhereInput;
}
