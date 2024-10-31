import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { JobCategoryUpdateOneRequiredWithoutJobsNestedInput } from '../job-category/job-category-update-one-required-without-jobs-nested.input';
import { ServiceRequestJobUpdateManyWithoutJobNestedInput } from '../service-request-job/service-request-job-update-many-without-job-nested.input';

@InputType()
export class JobUpdateWithoutJobWorkshopsInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    jobId?: BigIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isPopular?: BoolFieldUpdateOperationsInput;

    @Field(() => JobCategoryUpdateOneRequiredWithoutJobsNestedInput, {nullable:true})
    jobCategory?: JobCategoryUpdateOneRequiredWithoutJobsNestedInput;

    @Field(() => ServiceRequestJobUpdateManyWithoutJobNestedInput, {nullable:true})
    jobServiceRequests?: ServiceRequestJobUpdateManyWithoutJobNestedInput;
}
