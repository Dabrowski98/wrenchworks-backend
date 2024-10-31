import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressPersonCreateWithoutPersonInput } from './address-person-create-without-person.input';
import { Type } from 'class-transformer';
import { AddressPersonCreateOrConnectWithoutPersonInput } from './address-person-create-or-connect-without-person.input';
import { AddressPersonUpsertWithWhereUniqueWithoutPersonInput } from './address-person-upsert-with-where-unique-without-person.input';
import { AddressPersonCreateManyPersonInputEnvelope } from './address-person-create-many-person-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AddressPersonWhereUniqueInput } from './address-person-where-unique.input';
import { AddressPersonUpdateWithWhereUniqueWithoutPersonInput } from './address-person-update-with-where-unique-without-person.input';
import { AddressPersonUpdateManyWithWhereWithoutPersonInput } from './address-person-update-many-with-where-without-person.input';
import { AddressPersonScalarWhereInput } from './address-person-scalar-where.input';

@InputType()
export class AddressPersonUncheckedUpdateManyWithoutPersonNestedInput {

    @Field(() => [AddressPersonCreateWithoutPersonInput], {nullable:true})
    @Type(() => AddressPersonCreateWithoutPersonInput)
    create?: Array<AddressPersonCreateWithoutPersonInput>;

    @Field(() => [AddressPersonCreateOrConnectWithoutPersonInput], {nullable:true})
    @Type(() => AddressPersonCreateOrConnectWithoutPersonInput)
    connectOrCreate?: Array<AddressPersonCreateOrConnectWithoutPersonInput>;

    @Field(() => [AddressPersonUpsertWithWhereUniqueWithoutPersonInput], {nullable:true})
    @Type(() => AddressPersonUpsertWithWhereUniqueWithoutPersonInput)
    upsert?: Array<AddressPersonUpsertWithWhereUniqueWithoutPersonInput>;

    @Field(() => AddressPersonCreateManyPersonInputEnvelope, {nullable:true})
    @Type(() => AddressPersonCreateManyPersonInputEnvelope)
    createMany?: AddressPersonCreateManyPersonInputEnvelope;

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

    @Field(() => [AddressPersonUpdateWithWhereUniqueWithoutPersonInput], {nullable:true})
    @Type(() => AddressPersonUpdateWithWhereUniqueWithoutPersonInput)
    update?: Array<AddressPersonUpdateWithWhereUniqueWithoutPersonInput>;

    @Field(() => [AddressPersonUpdateManyWithWhereWithoutPersonInput], {nullable:true})
    @Type(() => AddressPersonUpdateManyWithWhereWithoutPersonInput)
    updateMany?: Array<AddressPersonUpdateManyWithWhereWithoutPersonInput>;

    @Field(() => [AddressPersonScalarWhereInput], {nullable:true})
    @Type(() => AddressPersonScalarWhereInput)
    deleteMany?: Array<AddressPersonScalarWhereInput>;
}
