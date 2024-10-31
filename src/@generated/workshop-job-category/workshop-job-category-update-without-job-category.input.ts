import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { WorkshopUpdateOneRequiredWithoutWorkshopJobCategoriesNestedInput } from '../workshop/workshop-update-one-required-without-workshop-job-categories-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class WorkshopJobCategoryUpdateWithoutJobCategoryInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => WorkshopUpdateOneRequiredWithoutWorkshopJobCategoriesNestedInput, {nullable:true})
    @Type(() => WorkshopUpdateOneRequiredWithoutWorkshopJobCategoriesNestedInput)
    workshop?: WorkshopUpdateOneRequiredWithoutWorkshopJobCategoriesNestedInput;
}
