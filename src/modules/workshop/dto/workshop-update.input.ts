import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { AddressUpdateOneWithoutWorkshopsNestedInput } from '../../address/dto/address-update-one-without-workshops-nested.input';
import { CustomerUpdateManyWithoutWorkshopNestedInput } from '../../customer/dto/customer-update-many-without-workshop-nested.input';
import { Type } from 'class-transformer';
import { EmployeeUpdateManyWithoutWorkshopNestedInput } from '../../employee/dto/employee-update-many-without-workshop-nested.input';
import { PermissionSetUpdateManyWithoutWorkshopNestedInput } from '../../permission-set/dto/permission-set-update-many-without-workshop-nested.input';
import { ReviewUpdateManyWithoutWorkshopNestedInput } from '../../review/dto/review-update-many-without-workshop-nested.input';
import { ServiceRequestUpdateManyWithoutWorkshopNestedInput } from '../../service-request/dto/service-request-update-many-without-workshop-nested.input';
import { ServiceUpdateManyWithoutWorkshopNestedInput } from '../../service/dto/service-update-many-without-workshop-nested.input';
import { PersonUpdateOneRequiredWithoutWorkshopsNestedInput } from '../../person/dto/person-update-one-required-without-workshops-nested.input';
import { WorkshopDetailsUpdateOneWithoutWorkshopNestedInput } from '../../workshop-details/dto/workshop-details-update-one-without-workshop-nested.input';
import { WorkshopJobUpdateManyWithoutWorkshopNestedInput } from '../../workshop-job/dto/workshop-job-update-many-without-workshop-nested.input';
import { JobCategoryUpdateManyWithoutWorkshopsNestedInput } from '../../job-category/dto/job-category-update-many-without-workshops-nested.input';
import { WorkshopDetailsUpdateToOneWithWhereWithoutWorkshopInput, WorkshopDetailsUpdateWithoutWorkshopInput } from 'src/modules/workshop-details';
import { AddressUpdateToOneWithWhereWithoutWorkshopsInput, AddressUpdateWithoutWorkshopsInput } from 'src/modules/address/dto';
import { GraphQLBigInt } from 'graphql-scalars';

@InputType()
export class WorkshopUpdateInput {

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    @Validator.IsEmail({}, { message: 'Invalid email format' })
    email?: string;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsOptional()
    @Validator.IsBoolean({ message: 'Is verified must be a boolean' })
    isVerified?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsOptional()
    @Validator.IsBoolean({ message: 'Is managing work must be a boolean' })
    isManagingWork?: boolean;

    @Field(() => GraphQLBigInt, { nullable: true })
    @Validator.IsOptional()
    personId?: bigint | number;

    //TODO: If someone else is assigned to the address, create a new address instead of updating the existing one.
    @Field(() => AddressUpdateWithoutWorkshopsInput, {nullable:true})
    @Type(() => AddressUpdateWithoutWorkshopsInput)
    @Validator.IsOptional()
    @Validator.ValidateNested()
    address?: AddressUpdateWithoutWorkshopsInput;

    @Field(() => WorkshopDetailsUpdateWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopDetailsUpdateWithoutWorkshopInput)
    @Validator.IsOptional()
    @Validator.ValidateNested()
    workshopDetails?: WorkshopDetailsUpdateWithoutWorkshopInput;
}
