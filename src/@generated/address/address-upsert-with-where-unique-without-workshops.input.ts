import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Type } from 'class-transformer';
import { AddressUpdateWithoutWorkshopsInput } from './address-update-without-workshops.input';
import { AddressCreateWithoutWorkshopsInput } from './address-create-without-workshops.input';

@InputType()
export class AddressUpsertWithWhereUniqueWithoutWorkshopsInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'addressId'>;

    @Field(() => AddressUpdateWithoutWorkshopsInput, {nullable:false})
    @Type(() => AddressUpdateWithoutWorkshopsInput)
    update!: AddressUpdateWithoutWorkshopsInput;

    @Field(() => AddressCreateWithoutWorkshopsInput, {nullable:false})
    @Type(() => AddressCreateWithoutWorkshopsInput)
    create!: AddressCreateWithoutWorkshopsInput;
}
