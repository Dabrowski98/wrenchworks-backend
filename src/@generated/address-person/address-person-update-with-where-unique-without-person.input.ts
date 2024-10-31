import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressPersonWhereUniqueInput } from './address-person-where-unique.input';
import { Type } from 'class-transformer';
import { AddressPersonUpdateWithoutPersonInput } from './address-person-update-without-person.input';

@InputType()
export class AddressPersonUpdateWithWhereUniqueWithoutPersonInput {

    @Field(() => AddressPersonWhereUniqueInput, {nullable:false})
    @Type(() => AddressPersonWhereUniqueInput)
    where!: Prisma.AtLeast<AddressPersonWhereUniqueInput, 'addressId_personId'>;

    @Field(() => AddressPersonUpdateWithoutPersonInput, {nullable:false})
    @Type(() => AddressPersonUpdateWithoutPersonInput)
    data!: AddressPersonUpdateWithoutPersonInput;
}
