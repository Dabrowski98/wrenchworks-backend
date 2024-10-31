import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateNestedOneWithoutWorkshopAddressesInput } from '../workshop/workshop-create-nested-one-without-workshop-addresses.input';
import { Type } from 'class-transformer';

@InputType()
export class AddressWorkshopCreateWithoutAddressInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => WorkshopCreateNestedOneWithoutWorkshopAddressesInput, {nullable:false})
    @Type(() => WorkshopCreateNestedOneWithoutWorkshopAddressesInput)
    workshop!: WorkshopCreateNestedOneWithoutWorkshopAddressesInput;
}
