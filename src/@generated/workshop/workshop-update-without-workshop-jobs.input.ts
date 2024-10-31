import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { AddressWorkshopUpdateManyWithoutWorkshopNestedInput } from '../address-workshop/address-workshop-update-many-without-workshop-nested.input';
import { CustomerUpdateManyWithoutWorkshopNestedInput } from '../customer/customer-update-many-without-workshop-nested.input';
import { Type } from 'class-transformer';
import { EmployeeUpdateManyWithoutWorkshopNestedInput } from '../employee/employee-update-many-without-workshop-nested.input';
import { PermissionSetUpdateManyWithoutWorkshopNestedInput } from '../permission-set/permission-set-update-many-without-workshop-nested.input';
import { ReviewUpdateManyWithoutWorkshopNestedInput } from '../review/review-update-many-without-workshop-nested.input';
import { ServiceRequestUpdateManyWithoutWorkshopNestedInput } from '../service-request/service-request-update-many-without-workshop-nested.input';
import { ServiceUpdateManyWithoutWorkshopNestedInput } from '../service/service-update-many-without-workshop-nested.input';
import { PersonUpdateOneRequiredWithoutWorkshopsNestedInput } from '../person/person-update-one-required-without-workshops-nested.input';
import { WorkshopDetailsUpdateOneWithoutWorkshopNestedInput } from '../workshop-details/workshop-details-update-one-without-workshop-nested.input';
import { WorkshopJobCategoryUpdateManyWithoutWorkshopNestedInput } from '../workshop-job-category/workshop-job-category-update-many-without-workshop-nested.input';

@InputType()
export class WorkshopUpdateWithoutWorkshopJobsInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    workshopId?: BigIntFieldUpdateOperationsInput;

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

    @Field(() => AddressWorkshopUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    workshopAddresses?: AddressWorkshopUpdateManyWithoutWorkshopNestedInput;

    @Field(() => CustomerUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    @Type(() => CustomerUpdateManyWithoutWorkshopNestedInput)
    customers?: CustomerUpdateManyWithoutWorkshopNestedInput;

    @Field(() => EmployeeUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    @Type(() => EmployeeUpdateManyWithoutWorkshopNestedInput)
    employees?: EmployeeUpdateManyWithoutWorkshopNestedInput;

    @Field(() => PermissionSetUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    permissionSets?: PermissionSetUpdateManyWithoutWorkshopNestedInput;

    @Field(() => ReviewUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    @Type(() => ReviewUpdateManyWithoutWorkshopNestedInput)
    reviews?: ReviewUpdateManyWithoutWorkshopNestedInput;

    @Field(() => ServiceRequestUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    @Type(() => ServiceRequestUpdateManyWithoutWorkshopNestedInput)
    serviceRequests?: ServiceRequestUpdateManyWithoutWorkshopNestedInput;

    @Field(() => ServiceUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    @Type(() => ServiceUpdateManyWithoutWorkshopNestedInput)
    services?: ServiceUpdateManyWithoutWorkshopNestedInput;

    @Field(() => PersonUpdateOneRequiredWithoutWorkshopsNestedInput, {nullable:true})
    @Type(() => PersonUpdateOneRequiredWithoutWorkshopsNestedInput)
    person?: PersonUpdateOneRequiredWithoutWorkshopsNestedInput;

    @Field(() => WorkshopDetailsUpdateOneWithoutWorkshopNestedInput, {nullable:true})
    @Type(() => WorkshopDetailsUpdateOneWithoutWorkshopNestedInput)
    workshopDetails?: WorkshopDetailsUpdateOneWithoutWorkshopNestedInput;

    @Field(() => WorkshopJobCategoryUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    workshopJobCategories?: WorkshopJobCategoryUpdateManyWithoutWorkshopNestedInput;
}
