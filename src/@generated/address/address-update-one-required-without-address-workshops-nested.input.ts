import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutAddressWorkshopsInput } from './address-create-without-address-workshops.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutAddressWorkshopsInput } from './address-create-or-connect-without-address-workshops.input';
import { AddressUpsertWithoutAddressWorkshopsInput } from './address-upsert-without-address-workshops.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressUpdateToOneWithWhereWithoutAddressWorkshopsInput } from './address-update-to-one-with-where-without-address-workshops.input';

@InputType()
export class AddressUpdateOneRequiredWithoutAddressWorkshopsNestedInput {

    @Field(() => AddressCreateWithoutAddressWorkshopsInput, {nullable:true})
    @Type(() => AddressCreateWithoutAddressWorkshopsInput)
    create?: AddressCreateWithoutAddressWorkshopsInput;

    @Field(() => AddressCreateOrConnectWithoutAddressWorkshopsInput, {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutAddressWorkshopsInput)
    connectOrCreate?: AddressCreateOrConnectWithoutAddressWorkshopsInput;

    @Field(() => AddressUpsertWithoutAddressWorkshopsInput, {nullable:true})
    @Type(() => AddressUpsertWithoutAddressWorkshopsInput)
    upsert?: AddressUpsertWithoutAddressWorkshopsInput;

    @Field(() => AddressWhereUniqueInput, {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'addressId'>;

    @Field(() => AddressUpdateToOneWithWhereWithoutAddressWorkshopsInput, {nullable:true})
    @Type(() => AddressUpdateToOneWithWhereWithoutAddressWorkshopsInput)
    update?: AddressUpdateToOneWithWhereWithoutAddressWorkshopsInput;
}
