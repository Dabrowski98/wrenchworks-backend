import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { AddressPersonUpdateManyWithoutAddressNestedInput } from '../address-person/address-person-update-many-without-address-nested.input';
import { AddressWorkshopUpdateManyWithoutAddressNestedInput } from '../address-workshop/address-workshop-update-many-without-address-nested.input';

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

    @Field(() => AddressPersonUpdateManyWithoutAddressNestedInput, {nullable:true})
    addressPersons?: AddressPersonUpdateManyWithoutAddressNestedInput;

    @Field(() => AddressWorkshopUpdateManyWithoutAddressNestedInput, {nullable:true})
    addressWorkshops?: AddressWorkshopUpdateManyWithoutAddressNestedInput;
}
