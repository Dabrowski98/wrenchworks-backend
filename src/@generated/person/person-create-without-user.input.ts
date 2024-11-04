import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { AddressCreateNestedManyWithoutPersonsInput } from '../address/address-create-nested-many-without-persons.input';
import { CustomerCreateNestedManyWithoutPersonInput } from '../customer/customer-create-nested-many-without-person.input';
import { Type } from 'class-transformer';
import { EmployeeCreateNestedManyWithoutPersonInput } from '../employee/employee-create-nested-many-without-person.input';
import { ServiceRequestCreateNestedManyWithoutPersonInput } from '../service-request/service-request-create-nested-many-without-person.input';
import { VehicleCreateNestedManyWithoutPersonInput } from '../vehicle/vehicle-create-nested-many-without-person.input';
import { WorkshopCreateNestedManyWithoutPersonInput } from '../workshop/workshop-create-nested-many-without-person.input';

@InputType()
export class PersonCreateWithoutUserInput {

    @HideField()
    personId?: bigint | number;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:true})
    telephoneNumber?: string;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => AddressCreateNestedManyWithoutPersonsInput, {nullable:true})
    addresses?: AddressCreateNestedManyWithoutPersonsInput;

    @Field(() => CustomerCreateNestedManyWithoutPersonInput, {nullable:true})
    @Type(() => CustomerCreateNestedManyWithoutPersonInput)
    customers?: CustomerCreateNestedManyWithoutPersonInput;

    @Field(() => EmployeeCreateNestedManyWithoutPersonInput, {nullable:true})
    @Type(() => EmployeeCreateNestedManyWithoutPersonInput)
    employees?: EmployeeCreateNestedManyWithoutPersonInput;

    @Field(() => ServiceRequestCreateNestedManyWithoutPersonInput, {nullable:true})
    @Type(() => ServiceRequestCreateNestedManyWithoutPersonInput)
    serviceRequests?: ServiceRequestCreateNestedManyWithoutPersonInput;

    @Field(() => VehicleCreateNestedManyWithoutPersonInput, {nullable:true})
    @Type(() => VehicleCreateNestedManyWithoutPersonInput)
    vehicles?: VehicleCreateNestedManyWithoutPersonInput;

    @Field(() => WorkshopCreateNestedManyWithoutPersonInput, {nullable:true})
    @Type(() => WorkshopCreateNestedManyWithoutPersonInput)
    workshops?: WorkshopCreateNestedManyWithoutPersonInput;
}
