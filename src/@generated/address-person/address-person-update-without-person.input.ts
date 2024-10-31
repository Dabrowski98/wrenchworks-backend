import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AddressUpdateOneRequiredWithoutAddressPersonsNestedInput } from '../address/address-update-one-required-without-address-persons-nested.input';

@InputType()
export class AddressPersonUpdateWithoutPersonInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => AddressUpdateOneRequiredWithoutAddressPersonsNestedInput, {nullable:true})
    address?: AddressUpdateOneRequiredWithoutAddressPersonsNestedInput;
}
