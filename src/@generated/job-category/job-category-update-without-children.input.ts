import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { JobCategoryUpdateOneWithoutChildrenNestedInput } from './job-category-update-one-without-children-nested.input';
import { JobUpdateManyWithoutJobCategoryNestedInput } from '../job/job-update-many-without-job-category-nested.input';
import { Type } from 'class-transformer';
import { WorkshopUpdateManyWithoutJobCategoriesNestedInput } from '../workshop/workshop-update-many-without-job-categories-nested.input';

@InputType()
export class JobCategoryUpdateWithoutChildrenInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    categoryId?: BigIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isPopular?: BoolFieldUpdateOperationsInput;

    @Field(() => JobCategoryUpdateOneWithoutChildrenNestedInput, {nullable:true})
    child?: JobCategoryUpdateOneWithoutChildrenNestedInput;

    @Field(() => JobUpdateManyWithoutJobCategoryNestedInput, {nullable:true})
    @Type(() => JobUpdateManyWithoutJobCategoryNestedInput)
    jobs?: JobUpdateManyWithoutJobCategoryNestedInput;

    @Field(() => WorkshopUpdateManyWithoutJobCategoriesNestedInput, {nullable:true})
    @Type(() => WorkshopUpdateManyWithoutJobCategoriesNestedInput)
    Workshops?: WorkshopUpdateManyWithoutJobCategoriesNestedInput;
}
