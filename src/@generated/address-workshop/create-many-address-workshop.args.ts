import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressWorkshopCreateManyInput } from './address-workshop-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAddressWorkshopArgs {

    @Field(() => [AddressWorkshopCreateManyInput], {nullable:false})
    @Type(() => AddressWorkshopCreateManyInput)
    data!: Array<AddressWorkshopCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
