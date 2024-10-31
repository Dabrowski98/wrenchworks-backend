import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableEnumWorkshopsDetailsStatusFieldUpdateOperationsInput } from '../prisma/nullable-enum-workshops-details-status-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { WorkshopUpdateOneRequiredWithoutWorkshopDetailsNestedInput } from '../workshop/workshop-update-one-required-without-workshop-details-nested.input';

@InputType()
export class WorkshopDetailsUpdateInput {

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    rating?: DecimalFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    workshopName?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    telephoneNumber?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    logoURL?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableEnumWorkshopsDetailsStatusFieldUpdateOperationsInput, {nullable:true})
    status?: NullableEnumWorkshopsDetailsStatusFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    NIP?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => WorkshopUpdateOneRequiredWithoutWorkshopDetailsNestedInput, {nullable:true})
    @Type(() => WorkshopUpdateOneRequiredWithoutWorkshopDetailsNestedInput)
    workshop?: WorkshopUpdateOneRequiredWithoutWorkshopDetailsNestedInput;
}
