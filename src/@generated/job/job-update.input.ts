import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { JobCategoryUpdateOneRequiredWithoutJobsNestedInput } from '../job-category/job-category-update-one-required-without-jobs-nested.input';
import { ServiceRequestUpdateManyWithoutJobsNestedInput } from '../service-request/service-request-update-many-without-jobs-nested.input';
import { Type } from 'class-transformer';
import { WorkshopJobUpdateManyWithoutJobNestedInput } from '../workshop-job/workshop-job-update-many-without-job-nested.input';

@InputType()
export class JobUpdateInput {

    @HideField()
    jobId?: BigIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isPopular?: BoolFieldUpdateOperationsInput;

    @Field(() => JobCategoryUpdateOneRequiredWithoutJobsNestedInput, {nullable:true})
    jobCategory?: JobCategoryUpdateOneRequiredWithoutJobsNestedInput;

    @Field(() => ServiceRequestUpdateManyWithoutJobsNestedInput, {nullable:true})
    @Type(() => ServiceRequestUpdateManyWithoutJobsNestedInput)
    serviceRequests?: ServiceRequestUpdateManyWithoutJobsNestedInput;

    @Field(() => WorkshopJobUpdateManyWithoutJobNestedInput, {nullable:true})
    @Type(() => WorkshopJobUpdateManyWithoutJobNestedInput)
    jobWorkshops?: WorkshopJobUpdateManyWithoutJobNestedInput;
}
