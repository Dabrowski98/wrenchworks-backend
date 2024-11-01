import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { AddressWorkshopUncheckedCreateNestedManyWithoutWorkshopInput } from '../address-workshop/address-workshop-unchecked-create-nested-many-without-workshop.input';
import { CustomerUncheckedCreateNestedManyWithoutWorkshopInput } from '../customer/customer-unchecked-create-nested-many-without-workshop.input';
import { Type } from 'class-transformer';
import { EmployeeUncheckedCreateNestedManyWithoutWorkshopInput } from '../employee/employee-unchecked-create-nested-many-without-workshop.input';
import { PermissionSetUncheckedCreateNestedManyWithoutWorkshopInput } from '../permission-set/permission-set-unchecked-create-nested-many-without-workshop.input';
import { ReviewUncheckedCreateNestedManyWithoutWorkshopInput } from '../review/review-unchecked-create-nested-many-without-workshop.input';
import { ServiceRequestUncheckedCreateNestedManyWithoutWorkshopInput } from '../service-request/service-request-unchecked-create-nested-many-without-workshop.input';
import { ServiceUncheckedCreateNestedManyWithoutWorkshopInput } from '../service/service-unchecked-create-nested-many-without-workshop.input';
import { WorkshopDetailsUncheckedCreateNestedOneWithoutWorkshopInput } from '../workshop-details/workshop-details-unchecked-create-nested-one-without-workshop.input';
import { WorkshopJobUncheckedCreateNestedManyWithoutWorkshopInput } from '../workshop-job/workshop-job-unchecked-create-nested-many-without-workshop.input';
import { WorkshopJobCategoryUncheckedCreateNestedManyWithoutWorkshopInput } from '../workshop-job-category/workshop-job-category-unchecked-create-nested-many-without-workshop.input';

@InputType()
export class WorkshopUncheckedCreateWithoutPersonInput {

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

    @Field(() => AddressWorkshopUncheckedCreateNestedManyWithoutWorkshopInput, {nullable:true})
    workshopAddresses?: AddressWorkshopUncheckedCreateNestedManyWithoutWorkshopInput;

    @Field(() => CustomerUncheckedCreateNestedManyWithoutWorkshopInput, {nullable:true})
    @Type(() => CustomerUncheckedCreateNestedManyWithoutWorkshopInput)
    customers?: CustomerUncheckedCreateNestedManyWithoutWorkshopInput;

    @Field(() => EmployeeUncheckedCreateNestedManyWithoutWorkshopInput, {nullable:true})
    @Type(() => EmployeeUncheckedCreateNestedManyWithoutWorkshopInput)
    employees?: EmployeeUncheckedCreateNestedManyWithoutWorkshopInput;

    @Field(() => PermissionSetUncheckedCreateNestedManyWithoutWorkshopInput, {nullable:true})
    permissionSets?: PermissionSetUncheckedCreateNestedManyWithoutWorkshopInput;

    @Field(() => ReviewUncheckedCreateNestedManyWithoutWorkshopInput, {nullable:true})
    @Type(() => ReviewUncheckedCreateNestedManyWithoutWorkshopInput)
    reviews?: ReviewUncheckedCreateNestedManyWithoutWorkshopInput;

    @Field(() => ServiceRequestUncheckedCreateNestedManyWithoutWorkshopInput, {nullable:true})
    @Type(() => ServiceRequestUncheckedCreateNestedManyWithoutWorkshopInput)
    serviceRequests?: ServiceRequestUncheckedCreateNestedManyWithoutWorkshopInput;

    @Field(() => ServiceUncheckedCreateNestedManyWithoutWorkshopInput, {nullable:true})
    @Type(() => ServiceUncheckedCreateNestedManyWithoutWorkshopInput)
    services?: ServiceUncheckedCreateNestedManyWithoutWorkshopInput;

    @Field(() => WorkshopDetailsUncheckedCreateNestedOneWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopDetailsUncheckedCreateNestedOneWithoutWorkshopInput)
    workshopDetails?: WorkshopDetailsUncheckedCreateNestedOneWithoutWorkshopInput;

    @Field(() => WorkshopJobUncheckedCreateNestedManyWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopJobUncheckedCreateNestedManyWithoutWorkshopInput)
    workshopJobs?: WorkshopJobUncheckedCreateNestedManyWithoutWorkshopInput;

    @Field(() => WorkshopJobCategoryUncheckedCreateNestedManyWithoutWorkshopInput, {nullable:true})
    workshopJobCategories?: WorkshopJobCategoryUncheckedCreateNestedManyWithoutWorkshopInput;
}
