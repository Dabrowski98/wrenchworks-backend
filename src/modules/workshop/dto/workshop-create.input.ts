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
import { JobCategoryCreateNestedManyWithoutWorkshopsInput } from '../../job-category/dto/job-category-create-nested-many-without-workshops.input';
import { GraphQLBigInt } from 'graphql-scalars';
import { WorkshopDetailsCreateWithoutWorkshopInput } from 'src/modules/workshop-details';
import { WorkshopJobCreateManyWorkshopInputEnvelope } from 'src/modules/workshop-job';

@InputType()
export class WorkshopCreateInput {

    @Field(() => String, {nullable:true})
    @Validator.IsEmail({}, { message: 'Invalid email format' })
    @Validator.IsOptional()
    email?: string;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Is verified must be a boolean' })
    @Validator.IsOptional()
    isVerified?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Is managing work must be a boolean' })
    @Validator.IsOptional()
    isManagingWork?: boolean;

    @Field(() => AddressCreateNestedOneWithoutWorkshopsInput, {nullable:true})
    @Validator.ValidateNested()
    @Validator.IsOptional()
    address?: AddressCreateNestedOneWithoutWorkshopsInput;

    @Field(() => GraphQLBigInt, { nullable: false })
    @Validator.IsNotEmpty({ message: 'Person ID is required' })
    personId!: bigint;

    @Field(() => WorkshopDetailsCreateWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopDetailsCreateWithoutWorkshopInput)
    @Validator.ValidateNested()
    @Validator.IsOptional()
    workshopDetails?: WorkshopDetailsCreateWithoutWorkshopInput;

    @Field(() => WorkshopJobCreateManyWorkshopInputEnvelope, {nullable:true})
    @Type(() => WorkshopJobCreateManyWorkshopInputEnvelope)
    @Validator.ValidateNested()
    @Validator.IsOptional()
    workshopJobs?: WorkshopJobCreateManyWorkshopInputEnvelope;

    @Field(() => [GraphQLBigInt], { nullable: true })
    @Validator.IsOptional()
    @Validator.IsArray({ message: 'Category IDs must be an array' })
    @Validator.ArrayNotEmpty({ message: 'Category IDs array cannot be empty' })
    categoryIds?: bigint[];

}
