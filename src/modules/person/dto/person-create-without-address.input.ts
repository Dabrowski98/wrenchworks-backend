import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { CustomerCreateNestedManyWithoutPersonInput } from '../../customer/dto/customer-create-nested-many-without-person.input';
import { Type } from 'class-transformer';
import { EmployeeCreateNestedManyWithoutPersonInput } from '../../employee/dto/employee-create-nested-many-without-person.input';
import { ServiceRequestCreateNestedManyWithoutPersonInput } from '../../service-request/dto/service-request-create-nested-many-without-person.input';
import { UserCreateNestedOneWithoutPersonInput } from '../../user/dto/user-create-nested-one-without-person.input';
import { VehicleCreateNestedManyWithoutPersonInput } from '../../vehicle/dto/vehicle-create-nested-many-without-person.input';
import { WorkshopCreateNestedManyWithoutPersonInput } from '../../workshop/dto/workshop-create-nested-many-without-person.input';


@InputType()
export class PersonCreateWithoutAddressInput {

    @HideField()
    personId?: bigint | number;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'First name must be a string' })
    @Validator.IsNotEmpty({ message: 'First name is required' })
    @Validator.Length(2, 30, { message: 'First name must be between 2 and 30 characters' })
    firstName!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Last name must be a string' })
    @Validator.IsNotEmpty({ message: 'Last name is required' })
    @Validator.Length(2, 30, { message: 'Last name must be between 2 and 30 characters' })
    lastName!: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Telephone number must be a string' })
    @Validator.Length(8, 12, { message: 'Telephone number must be between 8 and 12 characters' })
    @Validator.Matches(/^\+?[0-9]{8, 12}$/, { message: 'Invalid telephone number format' })
    @Validator.IsOptional()
    telephoneNumber?: string;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => CustomerCreateNestedManyWithoutPersonInput, {nullable:true})
    @Type(() => CustomerCreateNestedManyWithoutPersonInput)
    customers?: CustomerCreateNestedManyWithoutPersonInput;

    @Field(() => EmployeeCreateNestedManyWithoutPersonInput, {nullable:true})
    @Type(() => EmployeeCreateNestedManyWithoutPersonInput)
    employees?: EmployeeCreateNestedManyWithoutPersonInput;

    @Field(() => ServiceRequestCreateNestedManyWithoutPersonInput, {nullable:true})
    @Type(() => ServiceRequestCreateNestedManyWithoutPersonInput)
    serviceRequests?: ServiceRequestCreateNestedManyWithoutPersonInput;

    @Field(() => UserCreateNestedOneWithoutPersonInput, {nullable:true})
    @Type(() => UserCreateNestedOneWithoutPersonInput)
    user?: UserCreateNestedOneWithoutPersonInput;

    @Field(() => VehicleCreateNestedManyWithoutPersonInput, {nullable:true})
    @Type(() => VehicleCreateNestedManyWithoutPersonInput)
    vehicles?: VehicleCreateNestedManyWithoutPersonInput;

    @Field(() => WorkshopCreateNestedManyWithoutPersonInput, {nullable:true})
    @Type(() => WorkshopCreateNestedManyWithoutPersonInput)
    workshops?: WorkshopCreateNestedManyWithoutPersonInput;
}
