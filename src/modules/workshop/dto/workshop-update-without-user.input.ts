import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { AddressUpdateOneWithoutWorkshopNestedInput } from '../../address/dto/address-update-one-without-workshop-nested.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CustomerUpdateManyWithoutWorkshopNestedInput } from '../../customer/dto/customer-update-many-without-workshop-nested.input';
import { EmployeeUpdateManyWithoutWorkshopNestedInput } from '../../employee/dto/employee-update-many-without-workshop-nested.input';
import { PermissionSetUpdateManyWithoutWorkshopNestedInput } from '../../permission-set/dto/permission-set-update-many-without-workshop-nested.input';
import { ReviewUpdateManyWithoutWorkshopNestedInput } from '../../review/dto/review-update-many-without-workshop-nested.input';
import { ServiceRequestUpdateManyWithoutWorkshopNestedInput } from '../../service-request/dto/service-request-update-many-without-workshop-nested.input';
import { ServiceUpdateManyWithoutWorkshopNestedInput } from '../../service/dto/service-update-many-without-workshop-nested.input';
import { WorkshopDetailsUpdateOneWithoutWorkshopNestedInput } from '../../workshop-details/dto/workshop-details-update-one-without-workshop-nested.input';
import { WorkshopJobUpdateManyWithoutWorkshopNestedInput } from '../../workshop-job/dto/workshop-job-update-many-without-workshop-nested.input';
import { JobCategoryUpdateManyWithoutWorkshopsNestedInput } from '../../job-category/dto/job-category-update-many-without-workshops-nested.input';
import { JoinWorkshopRequestUpdateManyWithoutWorkshopNestedInput } from '../../join-workshop-request/dto/join-workshop-request-update-many-without-workshop-nested.input';

@InputType()
export class WorkshopUpdateWithoutUserInput {

    @HideField()
    workshopId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsEmail({}, { message: 'Invalid email format' })
    @Validator.IsOptional()
    email?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Telephone number must be a string' })
    @Validator.Length(8, 12, { message: 'Telephone number must be between 8 and 12 characters' })
    @Validator.Matches(/^\+?[0-9]{8, 12}$/, { message: 'Invalid telephone number format' })
    @Validator.IsOptional()
    telephoneNumber?: string;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Is verified must be a boolean' })
    @Validator.IsOptional()
    isVerified?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Is managing work must be a boolean' })
    @Validator.IsOptional()
    isManagingWork?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Is managing work must be a boolean' })
    @Validator.IsOptional()
    isOfferingService?: boolean;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    updatedBy?: bigint | number;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => AddressUpdateOneWithoutWorkshopNestedInput, {nullable:true})
    @ValidateNested()
    @Type(() => AddressUpdateOneWithoutWorkshopNestedInput)
    address?: AddressUpdateOneWithoutWorkshopNestedInput;

    @HideField()
    customers?: CustomerUpdateManyWithoutWorkshopNestedInput;

    @HideField()
    employees?: EmployeeUpdateManyWithoutWorkshopNestedInput;

    @Field(() => PermissionSetUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    @ValidateNested()
    @Type(() => PermissionSetUpdateManyWithoutWorkshopNestedInput)
    permissionSets?: PermissionSetUpdateManyWithoutWorkshopNestedInput;

    @HideField()
    reviews?: ReviewUpdateManyWithoutWorkshopNestedInput;

    @HideField()
    serviceRequests?: ServiceRequestUpdateManyWithoutWorkshopNestedInput;

    @HideField()
    services?: ServiceUpdateManyWithoutWorkshopNestedInput;

    @Field(() => WorkshopDetailsUpdateOneWithoutWorkshopNestedInput, {nullable:true})
    @Type(() => WorkshopDetailsUpdateOneWithoutWorkshopNestedInput)
    @ValidateNested()
    @Type(() => WorkshopDetailsUpdateOneWithoutWorkshopNestedInput)
    workshopDetails?: WorkshopDetailsUpdateOneWithoutWorkshopNestedInput;

    @HideField()
    workshopJobs?: WorkshopJobUpdateManyWithoutWorkshopNestedInput;

    @HideField()
    jobCategories?: JobCategoryUpdateManyWithoutWorkshopsNestedInput;

    @HideField()
    joinWorkshopRequests?: JoinWorkshopRequestUpdateManyWithoutWorkshopNestedInput;
}
