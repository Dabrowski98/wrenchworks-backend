import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { PersonUpdateOneRequiredWithoutCustomersNestedInput } from '../person/person-update-one-required-without-customers-nested.input';
import { WorkshopUpdateOneRequiredWithoutCustomersNestedInput } from '../workshop/workshop-update-one-required-without-customers-nested.input';
import { ServiceUpdateManyWithoutCustomerNestedInput } from '../service/service-update-many-without-customer-nested.input';

@InputType()
export class CustomerUpdateInput {

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    totalDue?: DecimalFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    NIP?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    companyName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => PersonUpdateOneRequiredWithoutCustomersNestedInput, {nullable:true})
    @Type(() => PersonUpdateOneRequiredWithoutCustomersNestedInput)
    person?: PersonUpdateOneRequiredWithoutCustomersNestedInput;

    @Field(() => WorkshopUpdateOneRequiredWithoutCustomersNestedInput, {nullable:true})
    @Type(() => WorkshopUpdateOneRequiredWithoutCustomersNestedInput)
    workshop?: WorkshopUpdateOneRequiredWithoutCustomersNestedInput;

    @Field(() => ServiceUpdateManyWithoutCustomerNestedInput, {nullable:true})
    @Type(() => ServiceUpdateManyWithoutCustomerNestedInput)
    services?: ServiceUpdateManyWithoutCustomerNestedInput;
}
