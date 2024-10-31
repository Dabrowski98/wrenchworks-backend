import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { WorkshopUpdateOneRequiredWithoutWorkshopAddressesNestedInput } from '../workshop/workshop-update-one-required-without-workshop-addresses-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class AddressWorkshopUpdateWithoutAddressInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => WorkshopUpdateOneRequiredWithoutWorkshopAddressesNestedInput, {nullable:true})
    @Type(() => WorkshopUpdateOneRequiredWithoutWorkshopAddressesNestedInput)
    workshop?: WorkshopUpdateOneRequiredWithoutWorkshopAddressesNestedInput;
}
