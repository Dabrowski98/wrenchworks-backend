import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AddressUpdateOneRequiredWithoutAddressWorkshopsNestedInput } from '../address/address-update-one-required-without-address-workshops-nested.input';
import { WorkshopUpdateOneRequiredWithoutWorkshopAddressesNestedInput } from '../workshop/workshop-update-one-required-without-workshop-addresses-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class AddressWorkshopUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => AddressUpdateOneRequiredWithoutAddressWorkshopsNestedInput, {nullable:true})
    address?: AddressUpdateOneRequiredWithoutAddressWorkshopsNestedInput;

    @Field(() => WorkshopUpdateOneRequiredWithoutWorkshopAddressesNestedInput, {nullable:true})
    @Type(() => WorkshopUpdateOneRequiredWithoutWorkshopAddressesNestedInput)
    workshop?: WorkshopUpdateOneRequiredWithoutWorkshopAddressesNestedInput;
}
