import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { AddressCreateNestedOneWithoutWorkshopInput } from '../../address/dto/address-create-nested-one-without-workshop.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CustomerCreateNestedManyWithoutWorkshopInput } from '../../customer/dto/customer-create-nested-many-without-workshop.input';
import { EmployeeCreateNestedManyWithoutWorkshopInput } from '../../employee/dto/employee-create-nested-many-without-workshop.input';
import { PermissionSetCreateNestedManyWithoutWorkshopInput } from '../../permission-set/dto/permission-set-create-nested-many-without-workshop.input';
import { ReviewCreateNestedManyWithoutWorkshopInput } from '../../review/dto/review-create-nested-many-without-workshop.input';
import { ServiceRequestCreateNestedManyWithoutWorkshopInput } from '../../service-request/dto/service-request-create-nested-many-without-workshop.input';
import { ServiceCreateNestedManyWithoutWorkshopInput } from '../../service/dto/service-create-nested-many-without-workshop.input';
import { UserCreateNestedOneWithoutWorkshopsInput } from '../../user/dto/user-create-nested-one-without-workshops.input';
import { WorkshopDetailsCreateNestedOneWithoutWorkshopInput } from '../../workshop-details/dto/workshop-details-create-nested-one-without-workshop.input';
import { WorkshopJobCreateNestedManyWithoutWorkshopInput } from '../../workshop-job/dto/workshop-job-create-nested-many-without-workshop.input';
import { JoinWorkshopRequestCreateNestedManyWithoutWorkshopInput } from '../../join-workshop-request/dto/join-workshop-request-create-nested-many-without-workshop.input';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';


@InputType()
export class WorkshopCreateWithoutJobCategoriesInput {

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

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Is managing work must be a boolean' })
    @Validator.IsOptional()
    isManagingWork?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Is managing work must be a boolean' })
    @Validator.IsOptional()
    isOfferingService?: boolean;

    @Field(() => AddressCreateNestedOneWithoutWorkshopInput, {nullable:true})
    @ValidateNested()
    @Type(() => AddressCreateNestedOneWithoutWorkshopInput)
    address?: AddressCreateNestedOneWithoutWorkshopInput;

    @Field(() => UserCreateNestedOneWithoutWorkshopsInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutWorkshopsInput)
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

    }