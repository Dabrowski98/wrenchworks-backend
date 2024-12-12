import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { CustomerUncheckedCreateNestedManyWithoutWorkshopInput } from '../../customer/dto/customer-unchecked-create-nested-many-without-workshop.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { EmployeeUncheckedCreateNestedManyWithoutWorkshopInput } from '../../employee/dto/employee-unchecked-create-nested-many-without-workshop.input';
import { ReviewUncheckedCreateNestedManyWithoutWorkshopInput } from '../../review/dto/review-unchecked-create-nested-many-without-workshop.input';
import { ServiceRequestUncheckedCreateNestedManyWithoutWorkshopInput } from '../../service-request/dto/service-request-unchecked-create-nested-many-without-workshop.input';
import { ServiceUncheckedCreateNestedManyWithoutWorkshopInput } from '../../service/dto/service-unchecked-create-nested-many-without-workshop.input';
import { WorkshopDetailsUncheckedCreateNestedOneWithoutWorkshopInput } from '../../workshop-details/dto/workshop-details-unchecked-create-nested-one-without-workshop.input';
import { WorkshopJobUncheckedCreateNestedManyWithoutWorkshopInput } from '../../workshop-job/dto/workshop-job-unchecked-create-nested-many-without-workshop.input';
import { JobCategoryUncheckedCreateNestedManyWithoutWorkshopsInput } from '../../job-category/dto/job-category-unchecked-create-nested-many-without-workshops.input';
import { JoinWorkshopRequestUncheckedCreateNestedManyWithoutWorkshopInput } from '../../join-workshop-request/dto/join-workshop-request-unchecked-create-nested-many-without-workshop.input';
import { WorkshopDeviceUncheckedCreateNestedManyWithoutWorkshopInput } from '../../workshop-device/dto/workshop-device-unchecked-create-nested-many-without-workshop.input';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';


@InputType()
export class WorkshopUncheckedCreateWithoutWorkshopDeviceOTPInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    ownerId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    @Validator.IsOptional()
    addressId?: bigint | number;

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

    @Field(() => CustomerUncheckedCreateNestedManyWithoutWorkshopInput, {nullable:true})
    @Type(() => CustomerUncheckedCreateNestedManyWithoutWorkshopInput)
    @ValidateNested()
    @Type(() => CustomerUncheckedCreateNestedManyWithoutWorkshopInput)
    customers?: CustomerUncheckedCreateNestedManyWithoutWorkshopInput;

    @Field(() => EmployeeUncheckedCreateNestedManyWithoutWorkshopInput, {nullable:true})
    @Type(() => EmployeeUncheckedCreateNestedManyWithoutWorkshopInput)
    @ValidateNested()
    @Type(() => EmployeeUncheckedCreateNestedManyWithoutWorkshopInput)
    employees?: EmployeeUncheckedCreateNestedManyWithoutWorkshopInput;

    @Field(() => ReviewUncheckedCreateNestedManyWithoutWorkshopInput, {nullable:true})
    @Type(() => ReviewUncheckedCreateNestedManyWithoutWorkshopInput)
    @ValidateNested()
    @Type(() => ReviewUncheckedCreateNestedManyWithoutWorkshopInput)
    reviews?: ReviewUncheckedCreateNestedManyWithoutWorkshopInput;

    @Field(() => ServiceRequestUncheckedCreateNestedManyWithoutWorkshopInput, {nullable:true})
    @Type(() => ServiceRequestUncheckedCreateNestedManyWithoutWorkshopInput)
    @ValidateNested()
    @Type(() => ServiceRequestUncheckedCreateNestedManyWithoutWorkshopInput)
    serviceRequests?: ServiceRequestUncheckedCreateNestedManyWithoutWorkshopInput;

    @Field(() => ServiceUncheckedCreateNestedManyWithoutWorkshopInput, {nullable:true})
    @Type(() => ServiceUncheckedCreateNestedManyWithoutWorkshopInput)
    @ValidateNested()
    @Type(() => ServiceUncheckedCreateNestedManyWithoutWorkshopInput)
    services?: ServiceUncheckedCreateNestedManyWithoutWorkshopInput;

    @Field(() => WorkshopDetailsUncheckedCreateNestedOneWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopDetailsUncheckedCreateNestedOneWithoutWorkshopInput)
    @ValidateNested()
    @Type(() => WorkshopDetailsUncheckedCreateNestedOneWithoutWorkshopInput)
    workshopDetails?: WorkshopDetailsUncheckedCreateNestedOneWithoutWorkshopInput;

    @Field(() => WorkshopJobUncheckedCreateNestedManyWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopJobUncheckedCreateNestedManyWithoutWorkshopInput)
    @ValidateNested()
    @Type(() => WorkshopJobUncheckedCreateNestedManyWithoutWorkshopInput)
    workshopJobs?: WorkshopJobUncheckedCreateNestedManyWithoutWorkshopInput;

    @Field(() => JobCategoryUncheckedCreateNestedManyWithoutWorkshopsInput, {nullable:true})
    @ValidateNested()
    @Type(() => JobCategoryUncheckedCreateNestedManyWithoutWorkshopsInput)
    jobCategories?: JobCategoryUncheckedCreateNestedManyWithoutWorkshopsInput;

    @Field(() => JoinWorkshopRequestUncheckedCreateNestedManyWithoutWorkshopInput, {nullable:true})
    joinWorkshopRequests?: JoinWorkshopRequestUncheckedCreateNestedManyWithoutWorkshopInput;

    @Field(() => WorkshopDeviceUncheckedCreateNestedManyWithoutWorkshopInput, {nullable:true})
    workshopDevices?: WorkshopDeviceUncheckedCreateNestedManyWithoutWorkshopInput;
}