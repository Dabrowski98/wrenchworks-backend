import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AddressUpdateOneRequiredWithoutAddressPersonsNestedInput } from '../address/address-update-one-required-without-address-persons-nested.input';
import { PersonUpdateOneRequiredWithoutPersonAddressesNestedInput } from '../person/person-update-one-required-without-person-addresses-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class AddressPersonUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => AddressUpdateOneRequiredWithoutAddressPersonsNestedInput, {nullable:true})
    address?: AddressUpdateOneRequiredWithoutAddressPersonsNestedInput;

    @Field(() => PersonUpdateOneRequiredWithoutPersonAddressesNestedInput, {nullable:true})
    @Type(() => PersonUpdateOneRequiredWithoutPersonAddressesNestedInput)
    person?: PersonUpdateOneRequiredWithoutPersonAddressesNestedInput;
}
