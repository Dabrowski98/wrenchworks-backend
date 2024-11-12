import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PersonWhereUniqueInput } from './person-where-unique.input';
import { Type } from 'class-transformer';
import { PersonUpdateWithoutAddressInput } from './person-update-without-address.input';
import { PersonCreateWithoutAddressInput } from './person-create-without-address.input';

@InputType()
export class PersonUpsertWithWhereUniqueWithoutAddressInput {

    @Field(() => PersonWhereUniqueInput, {nullable:false})
    @Type(() => PersonWhereUniqueInput)
    where!: Prisma.AtLeast<PersonWhereUniqueInput, 'personId'>;

    @Field(() => PersonUpdateWithoutAddressInput, {nullable:false})
    @Type(() => PersonUpdateWithoutAddressInput)
    update!: PersonUpdateWithoutAddressInput;

    @Field(() => PersonCreateWithoutAddressInput, {nullable:false})
    @Type(() => PersonCreateWithoutAddressInput)
    create!: PersonCreateWithoutAddressInput;
}
