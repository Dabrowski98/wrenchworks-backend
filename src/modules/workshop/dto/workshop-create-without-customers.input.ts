import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { AddressCreateNestedOneWithoutWorkshopInput } from '../../address/dto/address-create-nested-one-without-workshop.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { EmployeeCreateNestedManyWithoutWorkshopInput } from '../../employee/dto/employee-create-nested-many-without-workshop.input';
import { ReviewCreateNestedManyWithoutWorkshopInput } from '../../review/dto/review-create-nested-many-without-workshop.input';
import { ServiceRequestCreateNestedManyWithoutWorkshopInput } from '../../service-request/dto/service-request-create-nested-many-without-workshop.input';
import { ServiceCreateNestedManyWithoutWorkshopInput } from '../../service/dto/service-create-nested-many-without-workshop.input';
import { UserCreateNestedOneWithoutWorkshopsInput } from '../../user/dto/user-create-nested-one-without-workshops.input';
import { WorkshopDetailsCreateNestedOneWithoutWorkshopInput } from '../../workshop-details/dto/workshop-details-create-nested-one-without-workshop.input';
import { WorkshopJobCreateNestedManyWithoutWorkshopInput } from '../../workshop-job/dto/workshop-job-create-nested-many-without-workshop.input';
import { JobCategoryCreateNestedManyWithoutWorkshopsInput } from '../../job-category/dto/job-category-create-nested-many-without-workshops.input';
import { JoinWorkshopRequestCreateNestedManyWithoutWorkshopInput } from '../../join-workshop-request/dto/join-workshop-request-create-nested-many-without-workshop.input';
import { WorkshopDeviceOtpCreateNestedOneWithoutWorkshopInput } from '../../workshop-device-otp/dto/workshop-device-otp-create-nested-one-without-workshop.input';
import { WorkshopDeviceCreateNestedManyWithoutWorkshopInput } from '../../workshop-device/dto/workshop-device-create-nested-many-without-workshop.input';

@InputType()
export class WorkshopCreateWithoutCustomersInput {

    @HideField()
    workshopId?: bigint | number;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail({}, { message: 'Invalid email format' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Email is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    email!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Telephone number must be a string' })
    @Validator.Length(8, 12, { message: 'Telephone number must be between 8 and 12 characters' })
    @Validator.Matches(/^\+?[0-9]+$/, { message: 'Invalid telephone number format' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Telephone number is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    telephoneNumber!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Password must be a string' })
    @Validator.MinLength(8, { message: 'Password must be at least 8 characters long' })
    @Validator.Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, { message: 'Password must contain at least one letter, one number and one special character' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Password is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    password!: string;

    @HideField()
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

    @Field(() => AddressCreateNestedOneWithoutWorkshopInput, {nullable:true})
    @ValidateNested()
    @Type(() => AddressCreateNestedOneWithoutWorkshopInput)
    address?: AddressCreateNestedOneWithoutWorkshopInput;

    @HideField()
    employees?: EmployeeCreateNestedManyWithoutWorkshopInput;

    @HideField()
    reviews?: ReviewCreateNestedManyWithoutWorkshopInput;

    @HideField()
    serviceRequests?: ServiceRequestCreateNestedManyWithoutWorkshopInput;

    @HideField()
    services?: ServiceCreateNestedManyWithoutWorkshopInput;

    @Field(() => UserCreateNestedOneWithoutWorkshopsInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutWorkshopsInput)
    @ValidateNested()
    user!: UserCreateNestedOneWithoutWorkshopsInput;

    @Field(() => WorkshopDetailsCreateNestedOneWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopDetailsCreateNestedOneWithoutWorkshopInput)
    @ValidateNested()
    @Type(() => WorkshopDetailsCreateNestedOneWithoutWorkshopInput)
    workshopDetails?: WorkshopDetailsCreateNestedOneWithoutWorkshopInput;

    @Field(() => WorkshopJobCreateNestedManyWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopJobCreateNestedManyWithoutWorkshopInput)
    @ValidateNested()
    @Type(() => WorkshopJobCreateNestedManyWithoutWorkshopInput)
    workshopJobs?: WorkshopJobCreateNestedManyWithoutWorkshopInput;

    @Field(() => JobCategoryCreateNestedManyWithoutWorkshopsInput, {nullable:true})
    @ValidateNested()
    @Type(() => JobCategoryCreateNestedManyWithoutWorkshopsInput)
    jobCategories?: JobCategoryCreateNestedManyWithoutWorkshopsInput;

    @HideField()
    joinWorkshopRequests?: JoinWorkshopRequestCreateNestedManyWithoutWorkshopInput;

    @HideField()
    WorkshopDeviceOtp?: WorkshopDeviceOtpCreateNestedOneWithoutWorkshopInput;

    @HideField()
    workshopDevices?: WorkshopDeviceCreateNestedManyWithoutWorkshopInput;
}
