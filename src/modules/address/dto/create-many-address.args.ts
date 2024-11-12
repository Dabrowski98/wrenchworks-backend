import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressCreateManyInput } from './address-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAddressArgs {

    @Field(() => [AddressCreateManyInput], {nullable:false})
    @Type(() => AddressCreateManyInput)
    data!: Array<AddressCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
