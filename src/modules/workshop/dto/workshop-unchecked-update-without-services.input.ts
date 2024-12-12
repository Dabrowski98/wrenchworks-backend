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
import { WorkshopDetailsUncheckedUpdateOneWithoutWorkshopNestedInput } from '../../workshop-details/dto/workshop-details-unchecked-update-one-without-workshop-nested.input';
import { WorkshopJobUncheckedUpdateManyWithoutWorkshopNestedInput } from '../../workshop-job/dto/workshop-job-unchecked-update-many-without-workshop-nested.input';
import { JobCategoryUncheckedUpdateManyWithoutWorkshopsNestedInput } from '../../job-category/dto/job-category-unchecked-update-many-without-workshops-nested.input';
import { JoinWorkshopRequestUncheckedUpdateManyWithoutWorkshopNestedInput } from '../../join-workshop-request/dto/join-workshop-request-unchecked-update-many-without-workshop-nested.input';
import { WorkshopDeviceOTPUncheckedUpdateOneWithoutWorkshopNestedInput } from '../../workshop-device-otp/dto/workshop-device-otp-unchecked-update-one-without-workshop-nested.input';
import { WorkshopDeviceUncheckedUpdateManyWithoutWorkshopNestedInput } from '../../workshop-device/dto/workshop-device-unchecked-update-many-without-workshop-nested.input';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';


@InputType()
export class WorkshopUncheckedUpdateWithoutServicesInput {

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

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Password must be a string' })
    @Validator.MinLength(8, { message: 'Password must be at least 8 characters long' })
    @Validator.Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, { message: 'Password must contain at least one letter, one number and one special character' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Password is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    password?: string;

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

    @Field(() => WorkshopDetailsUncheckedUpdateOneWithoutWorkshopNestedInput, {nullable:true})
    @Type(() => WorkshopDetailsUncheckedUpdateOneWithoutWorkshopNestedInput)
    @ValidateNested()
    @Type(() => WorkshopDetailsUncheckedUpdateOneWithoutWorkshopNestedInput)
    workshopDetails?: WorkshopDetailsUncheckedUpdateOneWithoutWorkshopNestedInput;

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
    joinWorkshopRequests?: JoinWorkshopRequestUncheckedUpdateManyWithoutWorkshopNestedInput;

    @Field(() => WorkshopDeviceOTPUncheckedUpdateOneWithoutWorkshopNestedInput, {nullable:true})
    workshopDeviceOTP?: WorkshopDeviceOTPUncheckedUpdateOneWithoutWorkshopNestedInput;

    @Field(() => WorkshopDeviceUncheckedUpdateManyWithoutWorkshopNestedInput, {nullable:true})
    workshopDevices?: WorkshopDeviceUncheckedUpdateManyWithoutWorkshopNestedInput;
}