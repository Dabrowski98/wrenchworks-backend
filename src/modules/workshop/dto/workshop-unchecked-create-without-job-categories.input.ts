import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { CustomerUncheckedCreateNestedManyWithoutWorkshopInput } from '../../customer/dto/customer-unchecked-create-nested-many-without-workshop.input';
import { Type } from 'class-transformer';
import { EmployeeUncheckedCreateNestedManyWithoutWorkshopInput } from '../../employee/dto/employee-unchecked-create-nested-many-without-workshop.input';
import { PermissionSetUncheckedCreateNestedManyWithoutWorkshopInput } from '../../permission-set/dto/permission-set-unchecked-create-nested-many-without-workshop.input';
import { ReviewUncheckedCreateNestedManyWithoutWorkshopInput } from '../../review/dto/review-unchecked-create-nested-many-without-workshop.input';
import { ServiceRequestUncheckedCreateNestedManyWithoutWorkshopInput } from '../../service-request/dto/service-request-unchecked-create-nested-many-without-workshop.input';
import { ServiceUncheckedCreateNestedManyWithoutWorkshopInput } from '../../service/dto/service-unchecked-create-nested-many-without-workshop.input';
import { WorkshopDetailsUncheckedCreateNestedOneWithoutWorkshopInput } from '../../workshop-details/dto/workshop-details-unchecked-create-nested-one-without-workshop.input';
import { WorkshopJobUncheckedCreateNestedManyWithoutWorkshopInput } from '../../workshop-job/dto/workshop-job-unchecked-create-nested-many-without-workshop.input';

@InputType()
export class WorkshopUncheckedCreateWithoutJobCategoriesInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    personId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    addressId?: bigint | number;

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

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

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
}
