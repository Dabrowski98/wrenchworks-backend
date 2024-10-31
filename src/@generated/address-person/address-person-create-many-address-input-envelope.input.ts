import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressPersonCreateManyAddressInput } from './address-person-create-many-address.input';
import { Type } from 'class-transformer';

@InputType()
export class AddressPersonCreateManyAddressInputEnvelope {

    @Field(() => [AddressPersonCreateManyAddressInput], {nullable:false})
    @Type(() => AddressPersonCreateManyAddressInput)
    data!: Array<AddressPersonCreateManyAddressInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
