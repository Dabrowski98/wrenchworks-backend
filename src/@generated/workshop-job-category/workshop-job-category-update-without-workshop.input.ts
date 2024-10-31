import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { JobCategoryUpdateOneRequiredWithoutJobCategoryWorkshopsNestedInput } from '../job-category/job-category-update-one-required-without-job-category-workshops-nested.input';

@InputType()
export class WorkshopJobCategoryUpdateWithoutWorkshopInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => JobCategoryUpdateOneRequiredWithoutJobCategoryWorkshopsNestedInput, {nullable:true})
    jobCategory?: JobCategoryUpdateOneRequiredWithoutJobCategoryWorkshopsNestedInput;
}
