import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { AddressUncheckedCreateNestedManyWithoutWorkshopsInput } from '../address/address-unchecked-create-nested-many-without-workshops.input';
import { CustomerUncheckedCreateNestedManyWithoutWorkshopInput } from '../customer/customer-unchecked-create-nested-many-without-workshop.input';
import { Type } from 'class-transformer';
import { EmployeeUncheckedCreateNestedManyWithoutWorkshopInput } from '../employee/employee-unchecked-create-nested-many-without-workshop.input';
import { PermissionSetUncheckedCreateNestedManyWithoutWorkshopInput } from '../permission-set/permission-set-unchecked-create-nested-many-without-workshop.input';
import { ReviewUncheckedCreateNestedManyWithoutWorkshopInput } from '../review/review-unchecked-create-nested-many-without-workshop.input';
import { ServiceRequestUncheckedCreateNestedManyWithoutWorkshopInput } from '../service-request/service-request-unchecked-create-nested-many-without-workshop.input';
import { ServiceUncheckedCreateNestedManyWithoutWorkshopInput } from '../service/service-unchecked-create-nested-many-without-workshop.input';
import { WorkshopDetailsUncheckedCreateNestedOneWithoutWorkshopInput } from '../workshop-details/workshop-details-unchecked-create-nested-one-without-workshop.input';
import { JobCategoryUncheckedCreateNestedManyWithoutWorkshopsInput } from '../job-category/job-category-unchecked-create-nested-many-without-workshops.input';

@InputType()
export class WorkshopUncheckedCreateWithoutWorkshopJobsInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    personId!: bigint | number;

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

    @Field(() => AddressUncheckedCreateNestedManyWithoutWorkshopsInput, {nullable:true})
    addresses?: AddressUncheckedCreateNestedManyWithoutWorkshopsInput;

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

    @Field(() => JobCategoryUncheckedCreateNestedManyWithoutWorkshopsInput, {nullable:true})
    jobCategories?: JobCategoryUncheckedCreateNestedManyWithoutWorkshopsInput;
}
