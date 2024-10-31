import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { JobCategoryUpdateOneRequiredWithoutJobCategoryWorkshopsNestedInput } from '../job-category/job-category-update-one-required-without-job-category-workshops-nested.input';
import { WorkshopUpdateOneRequiredWithoutWorkshopJobCategoriesNestedInput } from '../workshop/workshop-update-one-required-without-workshop-job-categories-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class WorkshopJobCategoryUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => JobCategoryUpdateOneRequiredWithoutJobCategoryWorkshopsNestedInput, {nullable:true})
    jobCategory?: JobCategoryUpdateOneRequiredWithoutJobCategoryWorkshopsNestedInput;

    @Field(() => WorkshopUpdateOneRequiredWithoutWorkshopJobCategoriesNestedInput, {nullable:true})
    @Type(() => WorkshopUpdateOneRequiredWithoutWorkshopJobCategoriesNestedInput)
    workshop?: WorkshopUpdateOneRequiredWithoutWorkshopJobCategoriesNestedInput;
}
