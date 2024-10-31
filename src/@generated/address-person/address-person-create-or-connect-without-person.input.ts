import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressPersonWhereUniqueInput } from './address-person-where-unique.input';
import { Type } from 'class-transformer';
import { AddressPersonCreateWithoutPersonInput } from './address-person-create-without-person.input';

@InputType()
export class AddressPersonCreateOrConnectWithoutPersonInput {

    @Field(() => AddressPersonWhereUniqueInput, {nullable:false})
    @Type(() => AddressPersonWhereUniqueInput)
    where!: Prisma.AtLeast<AddressPersonWhereUniqueInput, 'addressId_personId'>;

    @Field(() => AddressPersonCreateWithoutPersonInput, {nullable:false})
    @Type(() => AddressPersonCreateWithoutPersonInput)
    create!: AddressPersonCreateWithoutPersonInput;
}
