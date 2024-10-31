import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressPersonCreateWithoutAddressInput } from './address-person-create-without-address.input';
import { Type } from 'class-transformer';
import { AddressPersonCreateOrConnectWithoutAddressInput } from './address-person-create-or-connect-without-address.input';
import { AddressPersonCreateManyAddressInputEnvelope } from './address-person-create-many-address-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AddressPersonWhereUniqueInput } from './address-person-where-unique.input';

@InputType()
export class AddressPersonUncheckedCreateNestedManyWithoutAddressInput {

    @Field(() => [AddressPersonCreateWithoutAddressInput], {nullable:true})
    @Type(() => AddressPersonCreateWithoutAddressInput)
    create?: Array<AddressPersonCreateWithoutAddressInput>;

    @Field(() => [AddressPersonCreateOrConnectWithoutAddressInput], {nullable:true})
    @Type(() => AddressPersonCreateOrConnectWithoutAddressInput)
    connectOrCreate?: Array<AddressPersonCreateOrConnectWithoutAddressInput>;

    @Field(() => AddressPersonCreateManyAddressInputEnvelope, {nullable:true})
    @Type(() => AddressPersonCreateManyAddressInputEnvelope)
    createMany?: AddressPersonCreateManyAddressInputEnvelope;

    @Field(() => [AddressPersonWhereUniqueInput], {nullable:true})
    @Type(() => AddressPersonWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AddressPersonWhereUniqueInput, 'addressId_personId'>>;
}
