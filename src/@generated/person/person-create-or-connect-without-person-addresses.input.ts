import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PersonWhereUniqueInput } from './person-where-unique.input';
import { Type } from 'class-transformer';
import { PersonCreateWithoutPersonAddressesInput } from './person-create-without-person-addresses.input';

@InputType()
export class PersonCreateOrConnectWithoutPersonAddressesInput {

    @Field(() => PersonWhereUniqueInput, {nullable:false})
    @Type(() => PersonWhereUniqueInput)
    where!: Prisma.AtLeast<PersonWhereUniqueInput, 'personId'>;

    @Field(() => PersonCreateWithoutPersonAddressesInput, {nullable:false})
    @Type(() => PersonCreateWithoutPersonAddressesInput)
    create!: PersonCreateWithoutPersonAddressesInput;
}
