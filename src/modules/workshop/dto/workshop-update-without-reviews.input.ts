import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { AddressUpdateOneWithoutWorkshopsNestedInput } from '../../address/dto/address-update-one-without-workshops-nested.input';
import { CustomerUpdateManyWithoutWorkshopNestedInput } from '../../customer/dto/customer-update-many-without-workshop-nested.input';
import { Type } from 'class-transformer';
import { EmployeeUpdateManyWithoutWorkshopNestedInput } from '../../employee/dto/employee-update-many-without-workshop-nested.input';
import { PermissionSetUpdateManyWithoutWorkshopNestedInput } from '../../permission-set/dto/permission-set-update-many-without-workshop-nested.input';
import { ServiceRequestUpdateManyWithoutWorkshopNestedInput } from '../../service-request/dto/service-request-update-many-without-workshop-nested.input';
import { ServiceUpdateManyWithoutWorkshopNestedInput } from '../../service/dto/service-update-many-without-workshop-nested.input';
import { PersonUpdateOneRequiredWithoutWorkshopsNestedInput } from '../../person/dto/person-update-one-required-without-workshops-nested.input';
import { WorkshopDetailsUpdateOneWithoutWorkshopNestedInput } from '../../workshop-details/dto/workshop-details-update-one-without-workshop-nested.input';
import { WorkshopJobUpdateManyWithoutWorkshopNestedInput } from '../../workshop-job/dto/workshop-job-update-many-without-workshop-nested.input';
import { JobCategoryUpdateManyWithoutWorkshopsNestedInput } from '../../job-category/dto/job-category-update-many-without-workshops-nested.input';

@InputType()
export class WorkshopUpdateWithoutReviewsInput {

    @HideField()
    workshopId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsEmail({}, { message: 'Invalid email format' })
    email?: string;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Is verified must be a boolean' })
    isVerified?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Is managing work must be a boolean' })
    isManagingWork?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => AddressUpdateOneWithoutWorkshopsNestedInput, {nullable:true})
    address?: AddressUpdateOneWithoutWorkshopsNestedInput;

    @Field(() => CustomerUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    @Type(() => CustomerUpdateManyWithoutWorkshopNestedInput)
    customers?: CustomerUpdateManyWithoutWorkshopNestedInput;

    @Field(() => EmployeeUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    @Type(() => EmployeeUpdateManyWithoutWorkshopNestedInput)
    employees?: EmployeeUpdateManyWithoutWorkshopNestedInput;

    @Field(() => PermissionSetUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    permissionSets?: PermissionSetUpdateManyWithoutWorkshopNestedInput;

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

    @Field(() => WorkshopJobUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    @Type(() => WorkshopJobUpdateManyWithoutWorkshopNestedInput)
    workshopJobs?: WorkshopJobUpdateManyWithoutWorkshopNestedInput;

    @Field(() => JobCategoryUpdateManyWithoutWorkshopsNestedInput, {nullable:true})
    jobCategories?: JobCategoryUpdateManyWithoutWorkshopsNestedInput;
}
