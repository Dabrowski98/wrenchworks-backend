import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutPersonsInput } from './address-create-without-persons.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutPersonsInput } from './address-create-or-connect-without-persons.input';
import { AddressUpsertWithWhereUniqueWithoutPersonsInput } from './address-upsert-with-where-unique-without-persons.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressUpdateWithWhereUniqueWithoutPersonsInput } from './address-update-with-where-unique-without-persons.input';
import { AddressUpdateManyWithWhereWithoutPersonsInput } from './address-update-many-with-where-without-persons.input';
import { AddressScalarWhereInput } from './address-scalar-where.input';

@InputType()
export class AddressUncheckedUpdateManyWithoutPersonsNestedInput {

    @Field(() => [AddressCreateWithoutPersonsInput], {nullable:true})
    @Type(() => AddressCreateWithoutPersonsInput)
    create?: Array<AddressCreateWithoutPersonsInput>;

    @Field(() => [AddressCreateOrConnectWithoutPersonsInput], {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutPersonsInput)
    connectOrCreate?: Array<AddressCreateOrConnectWithoutPersonsInput>;

    @Field(() => [AddressUpsertWithWhereUniqueWithoutPersonsInput], {nullable:true})
    @Type(() => AddressUpsertWithWhereUniqueWithoutPersonsInput)
    upsert?: Array<AddressUpsertWithWhereUniqueWithoutPersonsInput>;

    @Field(() => [AddressWhereUniqueInput], {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'addressId'>>;

    @Field(() => [AddressWhereUniqueInput], {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'addressId'>>;

    @Field(() => [AddressWhereUniqueInput], {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'addressId'>>;

    @Field(() => [AddressWhereUniqueInput], {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'addressId'>>;

    @Field(() => [AddressUpdateWithWhereUniqueWithoutPersonsInput], {nullable:true})
    @Type(() => AddressUpdateWithWhereUniqueWithoutPersonsInput)
    update?: Array<AddressUpdateWithWhereUniqueWithoutPersonsInput>;

    @Field(() => [AddressUpdateManyWithWhereWithoutPersonsInput], {nullable:true})
    @Type(() => AddressUpdateManyWithWhereWithoutPersonsInput)
    updateMany?: Array<AddressUpdateManyWithWhereWithoutPersonsInput>;

    @Field(() => [AddressScalarWhereInput], {nullable:true})
    @Type(() => AddressScalarWhereInput)
    deleteMany?: Array<AddressScalarWhereInput>;
}
