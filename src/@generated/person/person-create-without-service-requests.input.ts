import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { AddressCreateNestedOneWithoutPersonsInput } from '../address/address-create-nested-one-without-persons.input';
import { CustomerCreateNestedManyWithoutPersonInput } from '../customer/customer-create-nested-many-without-person.input';
import { Type } from 'class-transformer';
import { EmployeeCreateNestedManyWithoutPersonInput } from '../employee/employee-create-nested-many-without-person.input';
import { UserCreateNestedOneWithoutPersonInput } from '../user/user-create-nested-one-without-person.input';
import { VehicleCreateNestedManyWithoutPersonInput } from '../vehicle/vehicle-create-nested-many-without-person.input';
import { WorkshopCreateNestedManyWithoutPersonInput } from '../workshop/workshop-create-nested-many-without-person.input';

@InputType()
export class PersonCreateWithoutServiceRequestsInput {

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

    @Field(() => AddressCreateNestedOneWithoutPersonsInput, {nullable:true})
    address?: AddressCreateNestedOneWithoutPersonsInput;

    @Field(() => CustomerCreateNestedManyWithoutPersonInput, {nullable:true})
    @Type(() => CustomerCreateNestedManyWithoutPersonInput)
    customers?: CustomerCreateNestedManyWithoutPersonInput;

    @Field(() => EmployeeCreateNestedManyWithoutPersonInput, {nullable:true})
    @Type(() => EmployeeCreateNestedManyWithoutPersonInput)
    employees?: EmployeeCreateNestedManyWithoutPersonInput;

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
