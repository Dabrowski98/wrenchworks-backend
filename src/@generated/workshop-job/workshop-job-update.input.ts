import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDecimalFieldUpdateOperationsInput } from '../prisma/nullable-decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { JobUpdateOneRequiredWithoutJobWorkshopsNestedInput } from '../job/job-update-one-required-without-job-workshops-nested.input';
import { WorkshopUpdateOneRequiredWithoutWorkshopJobsNestedInput } from '../workshop/workshop-update-one-required-without-workshop-jobs-nested.input';

@InputType()
export class WorkshopJobUpdateInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    workshopJobId?: BigIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    workshopDescription?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => NullableDecimalFieldUpdateOperationsInput)
    minPrice?: NullableDecimalFieldUpdateOperationsInput;

    @Field(() => NullableDecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => NullableDecimalFieldUpdateOperationsInput)
    maxPrice?: NullableDecimalFieldUpdateOperationsInput;

    @Field(() => NullableDecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => NullableDecimalFieldUpdateOperationsInput)
    price?: NullableDecimalFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    availability?: BoolFieldUpdateOperationsInput;

    @Field(() => JobUpdateOneRequiredWithoutJobWorkshopsNestedInput, {nullable:true})
    @Type(() => JobUpdateOneRequiredWithoutJobWorkshopsNestedInput)
    job?: JobUpdateOneRequiredWithoutJobWorkshopsNestedInput;

    @Field(() => WorkshopUpdateOneRequiredWithoutWorkshopJobsNestedInput, {nullable:true})
    @Type(() => WorkshopUpdateOneRequiredWithoutWorkshopJobsNestedInput)
    workshop?: WorkshopUpdateOneRequiredWithoutWorkshopJobsNestedInput;
}
