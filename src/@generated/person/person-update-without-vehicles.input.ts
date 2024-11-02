import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { AddressUpdateManyWithoutPersonsNestedInput } from '../address/address-update-many-without-persons-nested.input';
import { CustomerUpdateManyWithoutPersonNestedInput } from '../customer/customer-update-many-without-person-nested.input';
import { Type } from 'class-transformer';
import { EmployeeUpdateManyWithoutPersonNestedInput } from '../employee/employee-update-many-without-person-nested.input';
import { ServiceRequestUpdateManyWithoutPersonNestedInput } from '../service-request/service-request-update-many-without-person-nested.input';
import { UserUpdateOneWithoutPersonNestedInput } from '../user/user-update-one-without-person-nested.input';
import { WorkshopUpdateManyWithoutPersonNestedInput } from '../workshop/workshop-update-many-without-person-nested.input';

@InputType()
export class PersonUpdateWithoutVehiclesInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    personId?: BigIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    telephoneNumber?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => AddressUpdateManyWithoutPersonsNestedInput, {nullable:true})
    addresses?: AddressUpdateManyWithoutPersonsNestedInput;

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

    @Field(() => WorkshopUpdateManyWithoutPersonNestedInput, {nullable:true})
    @Type(() => WorkshopUpdateManyWithoutPersonNestedInput)
    workshops?: WorkshopUpdateManyWithoutPersonNestedInput;
}
