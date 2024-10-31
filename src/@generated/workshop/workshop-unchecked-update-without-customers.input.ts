import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { AddressWorkshopUncheckedUpdateManyWithoutWorkshopNestedInput } from '../address-workshop/address-workshop-unchecked-update-many-without-workshop-nested.input';
import { EmployeeUncheckedUpdateManyWithoutWorkshopNestedInput } from '../employee/employee-unchecked-update-many-without-workshop-nested.input';
import { Type } from 'class-transformer';
import { PermissionSetUncheckedUpdateManyWithoutWorkshopNestedInput } from '../permission-set/permission-set-unchecked-update-many-without-workshop-nested.input';
import { ReviewUncheckedUpdateManyWithoutWorkshopNestedInput } from '../review/review-unchecked-update-many-without-workshop-nested.input';
import { ServiceRequestUncheckedUpdateManyWithoutWorkshopNestedInput } from '../service-request/service-request-unchecked-update-many-without-workshop-nested.input';
import { ServiceUncheckedUpdateManyWithoutWorkshopNestedInput } from '../service/service-unchecked-update-many-without-workshop-nested.input';
import { WorkshopDetailsUncheckedUpdateOneWithoutWorkshopNestedInput } from '../workshop-details/workshop-details-unchecked-update-one-without-workshop-nested.input';
import { WorkshopJobUncheckedUpdateManyWithoutWorkshopNestedInput } from '../workshop-job/workshop-job-unchecked-update-many-without-workshop-nested.input';
import { WorkshopJobCategoryUncheckedUpdateManyWithoutWorkshopNestedInput } from '../workshop-job-category/workshop-job-category-unchecked-update-many-without-workshop-nested.input';

@InputType()
export class WorkshopUncheckedUpdateWithoutCustomersInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    workshopId?: BigIntFieldUpdateOperationsInput;

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    personId?: BigIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isManagingWork?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => AddressWorkshopUncheckedUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    workshopAddresses?: AddressWorkshopUncheckedUpdateManyWithoutWorkshopNestedInput;

    @Field(() => EmployeeUncheckedUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    @Type(() => EmployeeUncheckedUpdateManyWithoutWorkshopNestedInput)
    employees?: EmployeeUncheckedUpdateManyWithoutWorkshopNestedInput;

    @Field(() => PermissionSetUncheckedUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    permissionSets?: PermissionSetUncheckedUpdateManyWithoutWorkshopNestedInput;

    @Field(() => ReviewUncheckedUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    @Type(() => ReviewUncheckedUpdateManyWithoutWorkshopNestedInput)
    reviews?: ReviewUncheckedUpdateManyWithoutWorkshopNestedInput;

    @Field(() => ServiceRequestUncheckedUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    @Type(() => ServiceRequestUncheckedUpdateManyWithoutWorkshopNestedInput)
    serviceRequests?: ServiceRequestUncheckedUpdateManyWithoutWorkshopNestedInput;

    @Field(() => ServiceUncheckedUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    @Type(() => ServiceUncheckedUpdateManyWithoutWorkshopNestedInput)
    services?: ServiceUncheckedUpdateManyWithoutWorkshopNestedInput;

    @Field(() => WorkshopDetailsUncheckedUpdateOneWithoutWorkshopNestedInput, {nullable:true})
    @Type(() => WorkshopDetailsUncheckedUpdateOneWithoutWorkshopNestedInput)
    workshopDetails?: WorkshopDetailsUncheckedUpdateOneWithoutWorkshopNestedInput;

    @Field(() => WorkshopJobUncheckedUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    @Type(() => WorkshopJobUncheckedUpdateManyWithoutWorkshopNestedInput)
    workshopJobs?: WorkshopJobUncheckedUpdateManyWithoutWorkshopNestedInput;

    @Field(() => WorkshopJobCategoryUncheckedUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    workshopJobCategories?: WorkshopJobCategoryUncheckedUpdateManyWithoutWorkshopNestedInput;
}
