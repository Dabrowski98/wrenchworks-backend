import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { ServiceRequestUncheckedUpdateManyWithoutJobsNestedInput } from '../service-request/service-request-unchecked-update-many-without-jobs-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class JobUncheckedUpdateWithoutJobWorkshopsInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    jobId?: BigIntFieldUpdateOperationsInput;

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    categoryId?: BigIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isPopular?: BoolFieldUpdateOperationsInput;

    @Field(() => ServiceRequestUncheckedUpdateManyWithoutJobsNestedInput, {nullable:true})
    @Type(() => ServiceRequestUncheckedUpdateManyWithoutJobsNestedInput)
    serviceRequests?: ServiceRequestUncheckedUpdateManyWithoutJobsNestedInput;
}
