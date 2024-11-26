import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutWorkshopInput } from './address-create-without-workshop.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { AddressCreateOrConnectWithoutWorkshopInput } from './address-create-or-connect-without-workshop.input';
import { AddressUpsertWithoutWorkshopInput } from './address-upsert-without-workshop.input';
import { AddressWhereInput } from './address-where.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressUpdateToOneWithWhereWithoutWorkshopInput } from './address-update-to-one-with-where-without-workshop.input';

@InputType()
export class AddressUpdateOneWithoutWorkshopNestedInput {

    @Field(() => AddressCreateWithoutWorkshopInput, {nullable:true})
    @Type(() => AddressCreateWithoutWorkshopInput)
    @ValidateNested()
    create?: AddressCreateWithoutWorkshopInput;

    @Field(() => AddressCreateOrConnectWithoutWorkshopInput, {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutWorkshopInput)
    @ValidateNested()
    connectOrCreate?: AddressCreateOrConnectWithoutWorkshopInput;

    @Field(() => AddressUpsertWithoutWorkshopInput, {nullable:true})
    @Type(() => AddressUpsertWithoutWorkshopInput)
    @ValidateNested()
    upsert?: AddressUpsertWithoutWorkshopInput;

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

    @Field(() => AddressUpdateToOneWithWhereWithoutWorkshopInput, {nullable:true})
    @Type(() => AddressUpdateToOneWithWhereWithoutWorkshopInput)
    @ValidateNested()
    update?: AddressUpdateToOneWithWhereWithoutWorkshopInput;
}
