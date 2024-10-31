import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWorkshopCreateManyAddressInput } from './address-workshop-create-many-address.input';
import { Type } from 'class-transformer';

@InputType()
export class AddressWorkshopCreateManyAddressInputEnvelope {

    @Field(() => [AddressWorkshopCreateManyAddressInput], {nullable:false})
    @Type(() => AddressWorkshopCreateManyAddressInput)
    data!: Array<AddressWorkshopCreateManyAddressInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
