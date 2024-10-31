import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PersonUpdateOneRequiredWithoutPersonAddressesNestedInput } from '../person/person-update-one-required-without-person-addresses-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class AddressPersonUpdateWithoutAddressInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PersonUpdateOneRequiredWithoutPersonAddressesNestedInput, {nullable:true})
    @Type(() => PersonUpdateOneRequiredWithoutPersonAddressesNestedInput)
    person?: PersonUpdateOneRequiredWithoutPersonAddressesNestedInput;
}
