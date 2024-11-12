import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutWorkshopsInput } from './address-create-without-workshops.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutWorkshopsInput } from './address-create-or-connect-without-workshops.input';
import { AddressUpsertWithoutWorkshopsInput } from './address-upsert-without-workshops.input';
import { AddressWhereInput } from './address-where.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressUpdateToOneWithWhereWithoutWorkshopsInput } from './address-update-to-one-with-where-without-workshops.input';

@InputType()
export class AddressUpdateOneWithoutWorkshopsNestedInput {

    @Field(() => AddressCreateWithoutWorkshopsInput, {nullable:true})
    @Type(() => AddressCreateWithoutWorkshopsInput)
    create?: AddressCreateWithoutWorkshopsInput;

    @Field(() => AddressCreateOrConnectWithoutWorkshopsInput, {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutWorkshopsInput)
    connectOrCreate?: AddressCreateOrConnectWithoutWorkshopsInput;

    @Field(() => AddressUpsertWithoutWorkshopsInput, {nullable:true})
    @Type(() => AddressUpsertWithoutWorkshopsInput)
    upsert?: AddressUpsertWithoutWorkshopsInput;

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    disconnect?: AddressWhereInput;

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    delete?: AddressWhereInput;

    @Field(() => AddressWhereUniqueInput, {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'addressId'>;

    @Field(() => AddressUpdateToOneWithWhereWithoutWorkshopsInput, {nullable:true})
    @Type(() => AddressUpdateToOneWithWhereWithoutWorkshopsInput)
    update?: AddressUpdateToOneWithWhereWithoutWorkshopsInput;
}
