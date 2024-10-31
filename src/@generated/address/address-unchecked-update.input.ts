import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { AddressPersonUncheckedUpdateManyWithoutAddressNestedInput } from '../address-person/address-person-unchecked-update-many-without-address-nested.input';
import { AddressWorkshopUncheckedUpdateManyWithoutAddressNestedInput } from '../address-workshop/address-workshop-unchecked-update-many-without-address-nested.input';

@InputType()
export class AddressUncheckedUpdateInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
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

    @Field(() => AddressPersonUncheckedUpdateManyWithoutAddressNestedInput, {nullable:true})
    addressPersons?: AddressPersonUncheckedUpdateManyWithoutAddressNestedInput;

    @Field(() => AddressWorkshopUncheckedUpdateManyWithoutAddressNestedInput, {nullable:true})
    addressWorkshops?: AddressWorkshopUncheckedUpdateManyWithoutAddressNestedInput;
}
