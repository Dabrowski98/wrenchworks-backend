import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressWorkshopUpdateManyMutationInput } from './address-workshop-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AddressWorkshopWhereInput } from './address-workshop-where.input';

@ArgsType()
export class UpdateManyAddressWorkshopArgs {

    @Field(() => AddressWorkshopUpdateManyMutationInput, {nullable:false})
    @Type(() => AddressWorkshopUpdateManyMutationInput)
    data!: AddressWorkshopUpdateManyMutationInput;

    @Field(() => AddressWorkshopWhereInput, {nullable:true})
    @Type(() => AddressWorkshopWhereInput)
    where?: AddressWorkshopWhereInput;
}
