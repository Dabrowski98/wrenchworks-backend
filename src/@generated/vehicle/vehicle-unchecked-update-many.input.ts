import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';

@InputType()
export class VehicleUncheckedUpdateManyInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    vehicleId?: BigIntFieldUpdateOperationsInput;

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    personId?: BigIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brandName?: StringFieldUpdateOperationsInput;

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    modelId?: BigIntFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;
}
