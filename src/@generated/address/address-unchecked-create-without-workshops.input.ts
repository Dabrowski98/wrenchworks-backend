import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { PersonUncheckedCreateNestedManyWithoutAddressInput } from '../person/person-unchecked-create-nested-many-without-address.input';
import { Type } from 'class-transformer';

@InputType()
export class AddressUncheckedCreateWithoutWorkshopsInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    addressId?: bigint | number;

    @Field(() => String, {nullable:false})
    country!: string;

    @Field(() => String, {nullable:false})
    region!: string;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => String, {nullable:true})
    street?: string;

    @Field(() => String, {nullable:false})
    buildingNo!: string;

    @Field(() => String, {nullable:true})
    flatNo?: string;

    @Field(() => String, {nullable:false})
    postCode!: string;

    @Field(() => PersonUncheckedCreateNestedManyWithoutAddressInput, {nullable:true})
    @Type(() => PersonUncheckedCreateNestedManyWithoutAddressInput)
    persons?: PersonUncheckedCreateNestedManyWithoutAddressInput;
}
