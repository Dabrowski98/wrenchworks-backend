import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { PersonUpdateManyWithoutAddressNestedInput } from '../person/person-update-many-without-address-nested.input';
import { Type } from 'class-transformer';
import { WorkshopUpdateManyWithoutAddressesNestedInput } from '../workshop/workshop-update-many-without-addresses-nested.input';

@InputType()
export class AddressUpdateInput {

    @HideField()
    addressId?: BigIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    country?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    region?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    city?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    street?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    buildingNo?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    flatNo?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    postCode?: StringFieldUpdateOperationsInput;

    @Field(() => PersonUpdateManyWithoutAddressNestedInput, {nullable:true})
    @Type(() => PersonUpdateManyWithoutAddressNestedInput)
    persons?: PersonUpdateManyWithoutAddressNestedInput;

    @Field(() => WorkshopUpdateManyWithoutAddressesNestedInput, {nullable:true})
    @Type(() => WorkshopUpdateManyWithoutAddressesNestedInput)
    workshops?: WorkshopUpdateManyWithoutAddressesNestedInput;
}
