import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressPersonCreateWithoutAddressInput } from './address-person-create-without-address.input';
import { Type } from 'class-transformer';
import { AddressPersonCreateOrConnectWithoutAddressInput } from './address-person-create-or-connect-without-address.input';
import { AddressPersonUpsertWithWhereUniqueWithoutAddressInput } from './address-person-upsert-with-where-unique-without-address.input';
import { AddressPersonCreateManyAddressInputEnvelope } from './address-person-create-many-address-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AddressPersonWhereUniqueInput } from './address-person-where-unique.input';
import { AddressPersonUpdateWithWhereUniqueWithoutAddressInput } from './address-person-update-with-where-unique-without-address.input';
import { AddressPersonUpdateManyWithWhereWithoutAddressInput } from './address-person-update-many-with-where-without-address.input';
import { AddressPersonScalarWhereInput } from './address-person-scalar-where.input';

@InputType()
export class AddressPersonUncheckedUpdateManyWithoutAddressNestedInput {

    @Field(() => [AddressPersonCreateWithoutAddressInput], {nullable:true})
    @Type(() => AddressPersonCreateWithoutAddressInput)
    create?: Array<AddressPersonCreateWithoutAddressInput>;

    @Field(() => [AddressPersonCreateOrConnectWithoutAddressInput], {nullable:true})
    @Type(() => AddressPersonCreateOrConnectWithoutAddressInput)
    connectOrCreate?: Array<AddressPersonCreateOrConnectWithoutAddressInput>;

    @Field(() => [AddressPersonUpsertWithWhereUniqueWithoutAddressInput], {nullable:true})
    @Type(() => AddressPersonUpsertWithWhereUniqueWithoutAddressInput)
    upsert?: Array<AddressPersonUpsertWithWhereUniqueWithoutAddressInput>;

    @Field(() => AddressPersonCreateManyAddressInputEnvelope, {nullable:true})
    @Type(() => AddressPersonCreateManyAddressInputEnvelope)
    createMany?: AddressPersonCreateManyAddressInputEnvelope;

    @Field(() => [AddressPersonWhereUniqueInput], {nullable:true})
    @Type(() => AddressPersonWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AddressPersonWhereUniqueInput, 'addressId_personId'>>;

    @Field(() => [AddressPersonWhereUniqueInput], {nullable:true})
    @Type(() => AddressPersonWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AddressPersonWhereUniqueInput, 'addressId_personId'>>;

    @Field(() => [AddressPersonWhereUniqueInput], {nullable:true})
    @Type(() => AddressPersonWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AddressPersonWhereUniqueInput, 'addressId_personId'>>;

    @Field(() => [AddressPersonWhereUniqueInput], {nullable:true})
    @Type(() => AddressPersonWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AddressPersonWhereUniqueInput, 'addressId_personId'>>;

    @Field(() => [AddressPersonUpdateWithWhereUniqueWithoutAddressInput], {nullable:true})
    @Type(() => AddressPersonUpdateWithWhereUniqueWithoutAddressInput)
    update?: Array<AddressPersonUpdateWithWhereUniqueWithoutAddressInput>;

    @Field(() => [AddressPersonUpdateManyWithWhereWithoutAddressInput], {nullable:true})
    @Type(() => AddressPersonUpdateManyWithWhereWithoutAddressInput)
    updateMany?: Array<AddressPersonUpdateManyWithWhereWithoutAddressInput>;

    @Field(() => [AddressPersonScalarWhereInput], {nullable:true})
    @Type(() => AddressPersonScalarWhereInput)
    deleteMany?: Array<AddressPersonScalarWhereInput>;
}
