import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AddressUpdateOneRequiredWithoutAddressWorkshopsNestedInput } from '../address/address-update-one-required-without-address-workshops-nested.input';

@InputType()
export class AddressWorkshopUpdateWithoutWorkshopInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => AddressUpdateOneRequiredWithoutAddressWorkshopsNestedInput, {nullable:true})
    address?: AddressUpdateOneRequiredWithoutAddressWorkshopsNestedInput;
}
