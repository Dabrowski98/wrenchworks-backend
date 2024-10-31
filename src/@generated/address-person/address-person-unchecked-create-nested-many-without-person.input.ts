import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressPersonCreateWithoutPersonInput } from './address-person-create-without-person.input';
import { Type } from 'class-transformer';
import { AddressPersonCreateOrConnectWithoutPersonInput } from './address-person-create-or-connect-without-person.input';
import { AddressPersonCreateManyPersonInputEnvelope } from './address-person-create-many-person-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AddressPersonWhereUniqueInput } from './address-person-where-unique.input';

@InputType()
export class AddressPersonUncheckedCreateNestedManyWithoutPersonInput {

    @Field(() => [AddressPersonCreateWithoutPersonInput], {nullable:true})
    @Type(() => AddressPersonCreateWithoutPersonInput)
    create?: Array<AddressPersonCreateWithoutPersonInput>;

    @Field(() => [AddressPersonCreateOrConnectWithoutPersonInput], {nullable:true})
    @Type(() => AddressPersonCreateOrConnectWithoutPersonInput)
    connectOrCreate?: Array<AddressPersonCreateOrConnectWithoutPersonInput>;

    @Field(() => AddressPersonCreateManyPersonInputEnvelope, {nullable:true})
    @Type(() => AddressPersonCreateManyPersonInputEnvelope)
    createMany?: AddressPersonCreateManyPersonInputEnvelope;

    @Field(() => [AddressPersonWhereUniqueInput], {nullable:true})
    @Type(() => AddressPersonWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AddressPersonWhereUniqueInput, 'addressId_personId'>>;
}
