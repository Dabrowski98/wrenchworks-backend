import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { JobCategoryUncheckedUpdateManyWithoutChildNestedInput } from './job-category-unchecked-update-many-without-child-nested.input';
import { JobUncheckedUpdateManyWithoutJobCategoryNestedInput } from '../job/job-unchecked-update-many-without-job-category-nested.input';
import { Type } from 'class-transformer';
import { WorkshopJobCategoryUncheckedUpdateManyWithoutJobCategoryNestedInput } from '../workshop-job-category/workshop-job-category-unchecked-update-many-without-job-category-nested.input';

@InputType()
export class JobCategoryUncheckedUpdateWithoutChildInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    categoryId?: BigIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isPopular?: BoolFieldUpdateOperationsInput;

    @Field(() => JobCategoryUncheckedUpdateManyWithoutChildNestedInput, {nullable:true})
    children?: JobCategoryUncheckedUpdateManyWithoutChildNestedInput;

    @Field(() => JobUncheckedUpdateManyWithoutJobCategoryNestedInput, {nullable:true})
    @Type(() => JobUncheckedUpdateManyWithoutJobCategoryNestedInput)
    jobs?: JobUncheckedUpdateManyWithoutJobCategoryNestedInput;

    @Field(() => WorkshopJobCategoryUncheckedUpdateManyWithoutJobCategoryNestedInput, {nullable:true})
    jobCategoryWorkshops?: WorkshopJobCategoryUncheckedUpdateManyWithoutJobCategoryNestedInput;
}
