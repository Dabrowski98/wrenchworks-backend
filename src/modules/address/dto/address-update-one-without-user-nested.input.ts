import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutUserInput } from './address-create-without-user.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { AddressCreateOrConnectWithoutUserInput } from './address-create-or-connect-without-user.input';
import { AddressUpsertWithoutUserInput } from './address-upsert-without-user.input';
import { AddressWhereInput } from './address-where.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressUpdateToOneWithWhereWithoutUserInput } from './address-update-to-one-with-where-without-user.input';

@InputType()
export class AddressUpdateOneWithoutUserNestedInput {

    @Field(() => AddressCreateWithoutUserInput, {nullable:true})
    @Type(() => AddressCreateWithoutUserInput)
    @ValidateNested()
    create?: AddressCreateWithoutUserInput;

    @Field(() => AddressCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutUserInput)
    @ValidateNested()
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput;

    @Field(() => AddressUpsertWithoutUserInput, {nullable:true})
    @Type(() => AddressUpsertWithoutUserInput)
    @ValidateNested()
    upsert?: AddressUpsertWithoutUserInput;

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    @ValidateNested()
    disconnect?: AddressWhereInput;

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    @ValidateNested()
    delete?: AddressWhereInput;

    @Field(() => AddressWhereUniqueInput, {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'addressId'>;

    @Field(() => AddressUpdateToOneWithWhereWithoutUserInput, {nullable:true})
    @Type(() => AddressUpdateToOneWithWhereWithoutUserInput)
    @ValidateNested()
    update?: AddressUpdateToOneWithWhereWithoutUserInput;
}
