import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { AddressCreateNestedOneWithoutWorkshopsInput } from '../../address/dto/address-create-nested-one-without-workshops.input';
import { CustomerCreateNestedManyWithoutWorkshopInput } from '../../customer/dto/customer-create-nested-many-without-workshop.input';
import { Type } from 'class-transformer';
import { EmployeeCreateNestedManyWithoutWorkshopInput } from '../../employee/dto/employee-create-nested-many-without-workshop.input';
import { PermissionSetCreateNestedManyWithoutWorkshopInput } from '../../permission-set/dto/permission-set-create-nested-many-without-workshop.input';
import { ReviewCreateNestedManyWithoutWorkshopInput } from '../../review/dto/review-create-nested-many-without-workshop.input';
import { ServiceRequestCreateNestedManyWithoutWorkshopInput } from '../../service-request/dto/service-request-create-nested-many-without-workshop.input';
import { ServiceCreateNestedManyWithoutWorkshopInput } from '../../service/dto/service-create-nested-many-without-workshop.input';
import { PersonCreateNestedOneWithoutWorkshopsInput } from '../../person/dto/person-create-nested-one-without-workshops.input';
import { WorkshopDetailsCreateNestedOneWithoutWorkshopInput } from '../../workshop-details/dto/workshop-details-create-nested-one-without-workshop.input';
import { WorkshopJobCreateNestedManyWithoutWorkshopInput } from '../../workshop-job/dto/workshop-job-create-nested-many-without-workshop.input';

@InputType()
export class WorkshopCreateWithoutJobCategoriesInput {

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

    @HideField()
    deletedAt?: Date | string;

    @Field(() => AddressCreateNestedOneWithoutWorkshopsInput, {nullable:true})
    address?: AddressCreateNestedOneWithoutWorkshopsInput;

    @Field(() => CustomerCreateNestedManyWithoutWorkshopInput, {nullable:true})
    @Type(() => CustomerCreateNestedManyWithoutWorkshopInput)
    customers?: CustomerCreateNestedManyWithoutWorkshopInput;

    @Field(() => EmployeeCreateNestedManyWithoutWorkshopInput, {nullable:true})
    @Type(() => EmployeeCreateNestedManyWithoutWorkshopInput)
    employees?: EmployeeCreateNestedManyWithoutWorkshopInput;

    @Field(() => PermissionSetCreateNestedManyWithoutWorkshopInput, {nullable:true})
    permissionSets?: PermissionSetCreateNestedManyWithoutWorkshopInput;

    @Field(() => ReviewCreateNestedManyWithoutWorkshopInput, {nullable:true})
    @Type(() => ReviewCreateNestedManyWithoutWorkshopInput)
    reviews?: ReviewCreateNestedManyWithoutWorkshopInput;

    @Field(() => ServiceRequestCreateNestedManyWithoutWorkshopInput, {nullable:true})
    @Type(() => ServiceRequestCreateNestedManyWithoutWorkshopInput)
    serviceRequests?: ServiceRequestCreateNestedManyWithoutWorkshopInput;

    @Field(() => ServiceCreateNestedManyWithoutWorkshopInput, {nullable:true})
    @Type(() => ServiceCreateNestedManyWithoutWorkshopInput)
    services?: ServiceCreateNestedManyWithoutWorkshopInput;

    @Field(() => PersonCreateNestedOneWithoutWorkshopsInput, {nullable:false})
    @Type(() => PersonCreateNestedOneWithoutWorkshopsInput)
    person!: PersonCreateNestedOneWithoutWorkshopsInput;

    @Field(() => WorkshopDetailsCreateNestedOneWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopDetailsCreateNestedOneWithoutWorkshopInput)
    workshopDetails?: WorkshopDetailsCreateNestedOneWithoutWorkshopInput;

    @Field(() => WorkshopJobCreateNestedManyWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopJobCreateNestedManyWithoutWorkshopInput)
    workshopJobs?: WorkshopJobCreateNestedManyWithoutWorkshopInput;
}
