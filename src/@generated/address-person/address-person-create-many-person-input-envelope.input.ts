import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressPersonCreateManyPersonInput } from './address-person-create-many-person.input';
import { Type } from 'class-transformer';

@InputType()
export class AddressPersonCreateManyPersonInputEnvelope {

    @Field(() => [AddressPersonCreateManyPersonInput], {nullable:false})
    @Type(() => AddressPersonCreateManyPersonInput)
    data!: Array<AddressPersonCreateManyPersonInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
