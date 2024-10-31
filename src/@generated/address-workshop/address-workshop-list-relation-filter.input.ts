import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWorkshopWhereInput } from './address-workshop-where.input';

@InputType()
export class AddressWorkshopListRelationFilter {

    @Field(() => AddressWorkshopWhereInput, {nullable:true})
    every?: AddressWorkshopWhereInput;

    @Field(() => AddressWorkshopWhereInput, {nullable:true})
    some?: AddressWorkshopWhereInput;

    @Field(() => AddressWorkshopWhereInput, {nullable:true})
    none?: AddressWorkshopWhereInput;
}
