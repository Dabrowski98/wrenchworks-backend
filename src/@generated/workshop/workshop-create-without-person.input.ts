import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { AddressWorkshopCreateNestedManyWithoutWorkshopInput } from '../address-workshop/address-workshop-create-nested-many-without-workshop.input';
import { CustomerCreateNestedManyWithoutWorkshopInput } from '../customer/customer-create-nested-many-without-workshop.input';
import { Type } from 'class-transformer';
import { EmployeeCreateNestedManyWithoutWorkshopInput } from '../employee/employee-create-nested-many-without-workshop.input';
import { PermissionSetCreateNestedManyWithoutWorkshopInput } from '../permission-set/permission-set-create-nested-many-without-workshop.input';
import { ReviewCreateNestedManyWithoutWorkshopInput } from '../review/review-create-nested-many-without-workshop.input';
import { ServiceRequestCreateNestedManyWithoutWorkshopInput } from '../service-request/service-request-create-nested-many-without-workshop.input';
import { ServiceCreateNestedManyWithoutWorkshopInput } from '../service/service-create-nested-many-without-workshop.input';
import { WorkshopDetailsCreateNestedOneWithoutWorkshopInput } from '../workshop-details/workshop-details-create-nested-one-without-workshop.input';
import { WorkshopJobCreateNestedManyWithoutWorkshopInput } from '../workshop-job/workshop-job-create-nested-many-without-workshop.input';
import { WorkshopJobCategoryCreateNestedManyWithoutWorkshopInput } from '../workshop-job-category/workshop-job-category-create-nested-many-without-workshop.input';

@InputType()
export class WorkshopCreateWithoutPersonInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
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

    @Field(() => AddressWorkshopCreateNestedManyWithoutWorkshopInput, {nullable:true})
    workshopAddresses?: AddressWorkshopCreateNestedManyWithoutWorkshopInput;

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

    @Field(() => WorkshopDetailsCreateNestedOneWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopDetailsCreateNestedOneWithoutWorkshopInput)
    workshopDetails?: WorkshopDetailsCreateNestedOneWithoutWorkshopInput;

    @Field(() => WorkshopJobCreateNestedManyWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopJobCreateNestedManyWithoutWorkshopInput)
    workshopJobs?: WorkshopJobCreateNestedManyWithoutWorkshopInput;

    @Field(() => WorkshopJobCategoryCreateNestedManyWithoutWorkshopInput, {nullable:true})
    workshopJobCategories?: WorkshopJobCategoryCreateNestedManyWithoutWorkshopInput;
}
