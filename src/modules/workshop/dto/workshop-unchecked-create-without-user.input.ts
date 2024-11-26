import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { CustomerUncheckedCreateNestedManyWithoutWorkshopInput } from '../../customer/dto/customer-unchecked-create-nested-many-without-workshop.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { EmployeeUncheckedCreateNestedManyWithoutWorkshopInput } from '../../employee/dto/employee-unchecked-create-nested-many-without-workshop.input';
import { PermissionSetUncheckedCreateNestedManyWithoutWorkshopInput } from '../../permission-set/dto/permission-set-unchecked-create-nested-many-without-workshop.input';
import { ReviewUncheckedCreateNestedManyWithoutWorkshopInput } from '../../review/dto/review-unchecked-create-nested-many-without-workshop.input';
import { ServiceRequestUncheckedCreateNestedManyWithoutWorkshopInput } from '../../service-request/dto/service-request-unchecked-create-nested-many-without-workshop.input';
import { ServiceUncheckedCreateNestedManyWithoutWorkshopInput } from '../../service/dto/service-unchecked-create-nested-many-without-workshop.input';
import { WorkshopDetailsUncheckedCreateNestedOneWithoutWorkshopInput } from '../../workshop-details/dto/workshop-details-unchecked-create-nested-one-without-workshop.input';
import { WorkshopJobUncheckedCreateNestedManyWithoutWorkshopInput } from '../../workshop-job/dto/workshop-job-unchecked-create-nested-many-without-workshop.input';
import { JobCategoryUncheckedCreateNestedManyWithoutWorkshopsInput } from '../../job-category/dto/job-category-unchecked-create-nested-many-without-workshops.input';
import { JoinWorkshopRequestUncheckedCreateNestedManyWithoutWorkshopInput } from '../../join-workshop-request/dto/join-workshop-request-unchecked-create-nested-many-without-workshop.input';

@InputType()
export class WorkshopUncheckedCreateWithoutUserInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    @Validator.IsOptional()
    addressId?: bigint | number;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail({}, { message: 'Invalid email format' })
    @Validator.IsOptional()
    email!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Telephone number must be a string' })
    @Validator.Length(8, 12, { message: 'Telephone number must be between 8 and 12 characters' })
    @Validator.Matches(/^\+?[0-9]{8, 12}$/, { message: 'Invalid telephone number format' })
    @Validator.IsOptional()
    telephoneNumber!: string;

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

    @Field(() => PermissionSetUncheckedCreateNestedManyWithoutWorkshopInput, {nullable:true})
    @ValidateNested()
    @Type(() => PermissionSetUncheckedCreateNestedManyWithoutWorkshopInput)
    permissionSets?: PermissionSetUncheckedCreateNestedManyWithoutWorkshopInput;

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
}
