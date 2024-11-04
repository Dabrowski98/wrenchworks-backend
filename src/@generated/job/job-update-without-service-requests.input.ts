import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { JobCategoryUpdateOneRequiredWithoutJobsNestedInput } from '../job-category/job-category-update-one-required-without-jobs-nested.input';
import { WorkshopJobUpdateManyWithoutJobNestedInput } from '../workshop-job/workshop-job-update-many-without-job-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class JobUpdateWithoutServiceRequestsInput {

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

    @Field(() => WorkshopJobUpdateManyWithoutJobNestedInput, {nullable:true})
    @Type(() => WorkshopJobUpdateManyWithoutJobNestedInput)
    jobWorkshops?: WorkshopJobUpdateManyWithoutJobNestedInput;
}