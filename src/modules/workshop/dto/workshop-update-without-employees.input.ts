import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { AddressUpdateOneWithoutWorkshopNestedInput } from '../../address/dto/address-update-one-without-workshop-nested.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CustomerUpdateManyWithoutWorkshopNestedInput } from '../../customer/dto/customer-update-many-without-workshop-nested.input';
import { ReviewUpdateManyWithoutWorkshopNestedInput } from '../../review/dto/review-update-many-without-workshop-nested.input';
import { ServiceRequestUpdateManyWithoutWorkshopNestedInput } from '../../service-request/dto/service-request-update-many-without-workshop-nested.input';
import { ServiceUpdateManyWithoutWorkshopNestedInput } from '../../service/dto/service-update-many-without-workshop-nested.input';
import { UserUpdateOneRequiredWithoutWorkshopsNestedInput } from '../../user/dto/user-update-one-required-without-workshops-nested.input';
import { WorkshopDetailsUpdateOneWithoutWorkshopNestedInput } from '../../workshop-details/dto/workshop-details-update-one-without-workshop-nested.input';
import { WorkshopJobUpdateManyWithoutWorkshopNestedInput } from '../../workshop-job/dto/workshop-job-update-many-without-workshop-nested.input';
import { JobCategoryUpdateManyWithoutWorkshopsNestedInput } from '../../job-category/dto/job-category-update-many-without-workshops-nested.input';
import { JoinWorkshopRequestUpdateManyWithoutWorkshopNestedInput } from '../../join-workshop-request/dto/join-workshop-request-update-many-without-workshop-nested.input';
import { WorkshopDeviceUpdateManyWithoutWorkshopNestedInput } from '../../workshop-device/dto/workshop-device-update-many-without-workshop-nested.input';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';


@InputType()
export class WorkshopUpdateWithoutEmployeesInput {

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

    @Field(() => AddressUpdateOneWithoutWorkshopNestedInput, {nullable:true})
    @ValidateNested()
    @Type(() => AddressUpdateOneWithoutWorkshopNestedInput)
    address?: AddressUpdateOneWithoutWorkshopNestedInput;

    @Field(() => WorkshopDetailsUpdateOneWithoutWorkshopNestedInput, {nullable:true})
    @Type(() => WorkshopDetailsUpdateOneWithoutWorkshopNestedInput)
    @ValidateNested()
    @Type(() => WorkshopDetailsUpdateOneWithoutWorkshopNestedInput)
    workshopDetails?: WorkshopDetailsUpdateOneWithoutWorkshopNestedInput;

    }