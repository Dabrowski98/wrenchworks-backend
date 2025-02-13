import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { CustomerUncheckedUpdateManyWithoutWorkshopNestedInput } from '../../customer/dto/customer-unchecked-update-many-without-workshop-nested.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { EmployeeUncheckedUpdateManyWithoutWorkshopNestedInput } from '../../employee/dto/employee-unchecked-update-many-without-workshop-nested.input';
import { ReviewUncheckedUpdateManyWithoutWorkshopNestedInput } from '../../review/dto/review-unchecked-update-many-without-workshop-nested.input';
import { ServiceRequestUncheckedUpdateManyWithoutWorkshopNestedInput } from '../../service-request/dto/service-request-unchecked-update-many-without-workshop-nested.input';
import { ServiceUncheckedUpdateManyWithoutWorkshopNestedInput } from '../../service/dto/service-unchecked-update-many-without-workshop-nested.input';
import { WorkshopJobUncheckedUpdateManyWithoutWorkshopNestedInput } from '../../workshop-job/dto/workshop-job-unchecked-update-many-without-workshop-nested.input';
import { JobCategoryUncheckedUpdateManyWithoutWorkshopsNestedInput } from '../../job-category/dto/job-category-unchecked-update-many-without-workshops-nested.input';
import { JoinWorkshopRequestUncheckedUpdateManyWithoutWorkshopNestedInput } from '../../join-workshop-request/dto/join-workshop-request-unchecked-update-many-without-workshop-nested.input';
import { WorkshopDeviceOtpUncheckedUpdateOneWithoutWorkshopNestedInput } from '../../workshop-device-otp/dto/workshop-device-otp-unchecked-update-one-without-workshop-nested.input';
import { WorkshopDeviceUncheckedUpdateManyWithoutWorkshopNestedInput } from '../../workshop-device/dto/workshop-device-unchecked-update-many-without-workshop-nested.input';

@InputType()
export class WorkshopUncheckedUpdateWithoutWorkshopDetailsInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    ownerId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    @Validator.IsOptional()
    addressId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsEmail({}, { message: 'Invalid email format' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Email is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    email?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Telephone number must be a string' })
    @Validator.Length(8, 12, { message: 'Telephone number must be between 8 and 12 characters' })
    @Validator.Matches(/^\+?[0-9]+$/, { message: 'Invalid telephone number format' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Telephone number is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
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

    @Field(() => CustomerUncheckedUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    @Type(() => CustomerUncheckedUpdateManyWithoutWorkshopNestedInput)
    @ValidateNested()
    @Type(() => CustomerUncheckedUpdateManyWithoutWorkshopNestedInput)
    customers?: CustomerUncheckedUpdateManyWithoutWorkshopNestedInput;

    @Field(() => EmployeeUncheckedUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    @Type(() => EmployeeUncheckedUpdateManyWithoutWorkshopNestedInput)
    @ValidateNested()
    @Type(() => EmployeeUncheckedUpdateManyWithoutWorkshopNestedInput)
    employees?: EmployeeUncheckedUpdateManyWithoutWorkshopNestedInput;

    @Field(() => ReviewUncheckedUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    @Type(() => ReviewUncheckedUpdateManyWithoutWorkshopNestedInput)
    @ValidateNested()
    @Type(() => ReviewUncheckedUpdateManyWithoutWorkshopNestedInput)
    reviews?: ReviewUncheckedUpdateManyWithoutWorkshopNestedInput;

    @Field(() => ServiceRequestUncheckedUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    @Type(() => ServiceRequestUncheckedUpdateManyWithoutWorkshopNestedInput)
    @ValidateNested()
    @Type(() => ServiceRequestUncheckedUpdateManyWithoutWorkshopNestedInput)
    serviceRequests?: ServiceRequestUncheckedUpdateManyWithoutWorkshopNestedInput;

    @Field(() => ServiceUncheckedUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    @Type(() => ServiceUncheckedUpdateManyWithoutWorkshopNestedInput)
    @ValidateNested()
    @Type(() => ServiceUncheckedUpdateManyWithoutWorkshopNestedInput)
    services?: ServiceUncheckedUpdateManyWithoutWorkshopNestedInput;

    @Field(() => WorkshopJobUncheckedUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    @Type(() => WorkshopJobUncheckedUpdateManyWithoutWorkshopNestedInput)
    @ValidateNested()
    @Type(() => WorkshopJobUncheckedUpdateManyWithoutWorkshopNestedInput)
    workshopJobs?: WorkshopJobUncheckedUpdateManyWithoutWorkshopNestedInput;

    @Field(() => JobCategoryUncheckedUpdateManyWithoutWorkshopsNestedInput, {nullable:true})
    @ValidateNested()
    @Type(() => JobCategoryUncheckedUpdateManyWithoutWorkshopsNestedInput)
    jobCategories?: JobCategoryUncheckedUpdateManyWithoutWorkshopsNestedInput;

    @Field(() => JoinWorkshopRequestUncheckedUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    @ValidateNested()
    joinWorkshopRequests?: JoinWorkshopRequestUncheckedUpdateManyWithoutWorkshopNestedInput;

    @Field(() => WorkshopDeviceOtpUncheckedUpdateOneWithoutWorkshopNestedInput, {nullable:true})
    WorkshopDeviceOtp?: WorkshopDeviceOtpUncheckedUpdateOneWithoutWorkshopNestedInput;

    @Field(() => WorkshopDeviceUncheckedUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    workshopDevices?: WorkshopDeviceUncheckedUpdateManyWithoutWorkshopNestedInput;
}
