import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { CustomerUncheckedUpdateManyWithoutWorkshopNestedInput } from '../../customer/dto/customer-unchecked-update-many-without-workshop-nested.input';
import { Type } from 'class-transformer';
import { EmployeeUncheckedUpdateManyWithoutWorkshopNestedInput } from '../../employee/dto/employee-unchecked-update-many-without-workshop-nested.input';
import { PermissionSetUncheckedUpdateManyWithoutWorkshopNestedInput } from '../../permission-set/dto/permission-set-unchecked-update-many-without-workshop-nested.input';
import { ReviewUncheckedUpdateManyWithoutWorkshopNestedInput } from '../../review/dto/review-unchecked-update-many-without-workshop-nested.input';
import { ServiceRequestUncheckedUpdateManyWithoutWorkshopNestedInput } from '../../service-request/dto/service-request-unchecked-update-many-without-workshop-nested.input';
import { ServiceUncheckedUpdateManyWithoutWorkshopNestedInput } from '../../service/dto/service-unchecked-update-many-without-workshop-nested.input';
import { WorkshopDetailsUncheckedUpdateOneWithoutWorkshopNestedInput } from '../../workshop-details/dto/workshop-details-unchecked-update-one-without-workshop-nested.input';
import { WorkshopJobUncheckedUpdateManyWithoutWorkshopNestedInput } from '../../workshop-job/dto/workshop-job-unchecked-update-many-without-workshop-nested.input';
import { JobCategoryUncheckedUpdateManyWithoutWorkshopsNestedInput } from '../../job-category/dto/job-category-unchecked-update-many-without-workshops-nested.input';

@InputType()
export class WorkshopUncheckedUpdateWithoutAddressInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    personId?: bigint | number;

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

    @Field(() => CustomerUncheckedUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    @Type(() => CustomerUncheckedUpdateManyWithoutWorkshopNestedInput)
    customers?: CustomerUncheckedUpdateManyWithoutWorkshopNestedInput;

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

    @Field(() => JobCategoryUncheckedUpdateManyWithoutWorkshopsNestedInput, {nullable:true})
    jobCategories?: JobCategoryUncheckedUpdateManyWithoutWorkshopsNestedInput;
}
