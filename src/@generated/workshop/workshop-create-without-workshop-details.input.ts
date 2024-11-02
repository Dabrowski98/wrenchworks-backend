import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { AddressCreateNestedManyWithoutWorkshopsInput } from '../address/address-create-nested-many-without-workshops.input';
import { CustomerCreateNestedManyWithoutWorkshopInput } from '../customer/customer-create-nested-many-without-workshop.input';
import { Type } from 'class-transformer';
import { EmployeeCreateNestedManyWithoutWorkshopInput } from '../employee/employee-create-nested-many-without-workshop.input';
import { PermissionSetCreateNestedManyWithoutWorkshopInput } from '../permission-set/permission-set-create-nested-many-without-workshop.input';
import { ReviewCreateNestedManyWithoutWorkshopInput } from '../review/review-create-nested-many-without-workshop.input';
import { ServiceRequestCreateNestedManyWithoutWorkshopInput } from '../service-request/service-request-create-nested-many-without-workshop.input';
import { ServiceCreateNestedManyWithoutWorkshopInput } from '../service/service-create-nested-many-without-workshop.input';
import { PersonCreateNestedOneWithoutWorkshopsInput } from '../person/person-create-nested-one-without-workshops.input';
import { WorkshopJobCreateNestedManyWithoutWorkshopInput } from '../workshop-job/workshop-job-create-nested-many-without-workshop.input';
import { JobCategoryCreateNestedManyWithoutWorkshopsInput } from '../job-category/job-category-create-nested-many-without-workshops.input';

@InputType()
export class WorkshopCreateWithoutWorkshopDetailsInput {

    @HideField()
    workshopId?: bigint | number;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;

    @Field(() => Boolean, {nullable:true})
    isManagingWork?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => AddressCreateNestedManyWithoutWorkshopsInput, {nullable:true})
    addresses?: AddressCreateNestedManyWithoutWorkshopsInput;

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

    @Field(() => WorkshopJobCreateNestedManyWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopJobCreateNestedManyWithoutWorkshopInput)
    workshopJobs?: WorkshopJobCreateNestedManyWithoutWorkshopInput;

    @Field(() => JobCategoryCreateNestedManyWithoutWorkshopsInput, {nullable:true})
    jobCategories?: JobCategoryCreateNestedManyWithoutWorkshopsInput;
}
