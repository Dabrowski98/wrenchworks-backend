import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutPersonsInput } from './address-create-without-persons.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutPersonsInput } from './address-create-or-connect-without-persons.input';
import { AddressUpsertWithoutPersonsInput } from './address-upsert-without-persons.input';
import { AddressWhereInput } from './address-where.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressUpdateToOneWithWhereWithoutPersonsInput } from './address-update-to-one-with-where-without-persons.input';

@InputType()
export class AddressUpdateOneWithoutPersonsNestedInput {

    @Field(() => AddressCreateWithoutPersonsInput, {nullable:true})
    @Type(() => AddressCreateWithoutPersonsInput)
    create?: AddressCreateWithoutPersonsInput;

    @Field(() => AddressCreateOrConnectWithoutPersonsInput, {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutPersonsInput)
    connectOrCreate?: AddressCreateOrConnectWithoutPersonsInput;

    @Field(() => AddressUpsertWithoutPersonsInput, {nullable:true})
    @Type(() => AddressUpsertWithoutPersonsInput)
    upsert?: AddressUpsertWithoutPersonsInput;

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    disconnect?: AddressWhereInput;

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    delete?: AddressWhereInput;

    @Field(() => AddressWhereUniqueInput, {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'addressId'>;

    @Field(() => AddressUpdateToOneWithWhereWithoutPersonsInput, {nullable:true})
    @Type(() => AddressUpdateToOneWithWhereWithoutPersonsInput)
    update?: AddressUpdateToOneWithWhereWithoutPersonsInput;
}
