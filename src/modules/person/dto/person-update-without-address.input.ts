import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { CustomerUpdateManyWithoutPersonNestedInput } from '../../customer/dto/customer-update-many-without-person-nested.input';
import { Type } from 'class-transformer';
import { EmployeeUpdateManyWithoutPersonNestedInput } from '../../employee/dto/employee-update-many-without-person-nested.input';
import { ServiceRequestUpdateManyWithoutPersonNestedInput } from '../../service-request/dto/service-request-update-many-without-person-nested.input';
import { UserUpdateOneWithoutPersonNestedInput } from '../../user/dto/user-update-one-without-person-nested.input';
import { VehicleUpdateManyWithoutPersonNestedInput } from '../../vehicle/dto/vehicle-update-many-without-person-nested.input';
import { WorkshopUpdateManyWithoutPersonNestedInput } from '../../workshop/dto/workshop-update-many-without-person-nested.input';
import { CREATE, UPDATE } from 'src/constants/validation-groups';


@InputType()
export class PersonUpdateWithoutAddressInput {

    @HideField()
    personId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'First name must be a string' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'First name is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    @Validator.Length(2, 30, { message: 'First name must be between 2 and 30 characters' })
    firstName?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Last name must be a string' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Last name is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    @Validator.Length(2, 30, { message: 'Last name must be between 2 and 30 characters' })
    lastName?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Telephone number must be a string' })
    @Validator.Length(8, 12, { message: 'Telephone number must be between 8 and 12 characters' })
    @Validator.Matches(/^\+?[0-9]{8, 12}$/, { message: 'Invalid telephone number format' })
    @Validator.IsOptional()
    telephoneNumber?: string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => CustomerUpdateManyWithoutPersonNestedInput, {nullable:true})
    @Type(() => CustomerUpdateManyWithoutPersonNestedInput)
    customers?: CustomerUpdateManyWithoutPersonNestedInput;

    @Field(() => EmployeeUpdateManyWithoutPersonNestedInput, {nullable:true})
    @Type(() => EmployeeUpdateManyWithoutPersonNestedInput)
    employees?: EmployeeUpdateManyWithoutPersonNestedInput;

    @Field(() => ServiceRequestUpdateManyWithoutPersonNestedInput, {nullable:true})
    @Type(() => ServiceRequestUpdateManyWithoutPersonNestedInput)
    serviceRequests?: ServiceRequestUpdateManyWithoutPersonNestedInput;

    @Field(() => UserUpdateOneWithoutPersonNestedInput, {nullable:true})
    @Type(() => UserUpdateOneWithoutPersonNestedInput)
    user?: UserUpdateOneWithoutPersonNestedInput;

    @Field(() => VehicleUpdateManyWithoutPersonNestedInput, {nullable:true})
    @Type(() => VehicleUpdateManyWithoutPersonNestedInput)
    vehicles?: VehicleUpdateManyWithoutPersonNestedInput;

    @Field(() => WorkshopUpdateManyWithoutPersonNestedInput, {nullable:true})
    @Type(() => WorkshopUpdateManyWithoutPersonNestedInput)
    workshops?: WorkshopUpdateManyWithoutPersonNestedInput;
}
