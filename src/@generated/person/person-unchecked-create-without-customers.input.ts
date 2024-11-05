import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { EmployeeUncheckedCreateNestedManyWithoutPersonInput } from '../employee/employee-unchecked-create-nested-many-without-person.input';
import { Type } from 'class-transformer';
import { ServiceRequestUncheckedCreateNestedManyWithoutPersonInput } from '../service-request/service-request-unchecked-create-nested-many-without-person.input';
import { UserUncheckedCreateNestedOneWithoutPersonInput } from '../user/user-unchecked-create-nested-one-without-person.input';
import { VehicleUncheckedCreateNestedManyWithoutPersonInput } from '../vehicle/vehicle-unchecked-create-nested-many-without-person.input';
import { WorkshopUncheckedCreateNestedManyWithoutPersonInput } from '../workshop/workshop-unchecked-create-nested-many-without-person.input';

@InputType()
export class PersonUncheckedCreateWithoutCustomersInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    personId?: bigint | number;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:true})
    telephoneNumber?: string;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    addressId?: bigint | number;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => EmployeeUncheckedCreateNestedManyWithoutPersonInput, {nullable:true})
    @Type(() => EmployeeUncheckedCreateNestedManyWithoutPersonInput)
    employees?: EmployeeUncheckedCreateNestedManyWithoutPersonInput;

    @Field(() => ServiceRequestUncheckedCreateNestedManyWithoutPersonInput, {nullable:true})
    @Type(() => ServiceRequestUncheckedCreateNestedManyWithoutPersonInput)
    serviceRequests?: ServiceRequestUncheckedCreateNestedManyWithoutPersonInput;

    @Field(() => UserUncheckedCreateNestedOneWithoutPersonInput, {nullable:true})
    @Type(() => UserUncheckedCreateNestedOneWithoutPersonInput)
    user?: UserUncheckedCreateNestedOneWithoutPersonInput;

    @Field(() => VehicleUncheckedCreateNestedManyWithoutPersonInput, {nullable:true})
    @Type(() => VehicleUncheckedCreateNestedManyWithoutPersonInput)
    vehicles?: VehicleUncheckedCreateNestedManyWithoutPersonInput;

    @Field(() => WorkshopUncheckedCreateNestedManyWithoutPersonInput, {nullable:true})
    @Type(() => WorkshopUncheckedCreateNestedManyWithoutPersonInput)
    workshops?: WorkshopUncheckedCreateNestedManyWithoutPersonInput;
}
