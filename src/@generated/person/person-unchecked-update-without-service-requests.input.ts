import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { AddressUncheckedUpdateManyWithoutPersonsNestedInput } from '../address/address-unchecked-update-many-without-persons-nested.input';
import { CustomerUncheckedUpdateManyWithoutPersonNestedInput } from '../customer/customer-unchecked-update-many-without-person-nested.input';
import { Type } from 'class-transformer';
import { EmployeeUncheckedUpdateManyWithoutPersonNestedInput } from '../employee/employee-unchecked-update-many-without-person-nested.input';
import { UserUncheckedUpdateOneWithoutPersonNestedInput } from '../user/user-unchecked-update-one-without-person-nested.input';
import { VehicleUncheckedUpdateManyWithoutPersonNestedInput } from '../vehicle/vehicle-unchecked-update-many-without-person-nested.input';
import { WorkshopUncheckedUpdateManyWithoutPersonNestedInput } from '../workshop/workshop-unchecked-update-many-without-person-nested.input';

@InputType()
export class PersonUncheckedUpdateWithoutServiceRequestsInput {

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

    @Field(() => AddressUncheckedUpdateManyWithoutPersonsNestedInput, {nullable:true})
    addresses?: AddressUncheckedUpdateManyWithoutPersonsNestedInput;

    @Field(() => CustomerUncheckedUpdateManyWithoutPersonNestedInput, {nullable:true})
    @Type(() => CustomerUncheckedUpdateManyWithoutPersonNestedInput)
    customers?: CustomerUncheckedUpdateManyWithoutPersonNestedInput;

    @Field(() => EmployeeUncheckedUpdateManyWithoutPersonNestedInput, {nullable:true})
    @Type(() => EmployeeUncheckedUpdateManyWithoutPersonNestedInput)
    employees?: EmployeeUncheckedUpdateManyWithoutPersonNestedInput;

    @Field(() => UserUncheckedUpdateOneWithoutPersonNestedInput, {nullable:true})
    @Type(() => UserUncheckedUpdateOneWithoutPersonNestedInput)
    user?: UserUncheckedUpdateOneWithoutPersonNestedInput;

    @Field(() => VehicleUncheckedUpdateManyWithoutPersonNestedInput, {nullable:true})
    @Type(() => VehicleUncheckedUpdateManyWithoutPersonNestedInput)
    vehicles?: VehicleUncheckedUpdateManyWithoutPersonNestedInput;

    @Field(() => WorkshopUncheckedUpdateManyWithoutPersonNestedInput, {nullable:true})
    @Type(() => WorkshopUncheckedUpdateManyWithoutPersonNestedInput)
    workshops?: WorkshopUncheckedUpdateManyWithoutPersonNestedInput;
}
