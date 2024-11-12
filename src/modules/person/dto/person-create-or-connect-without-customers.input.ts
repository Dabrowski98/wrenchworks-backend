import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PersonWhereUniqueInput } from './person-where-unique.input';
import { Type } from 'class-transformer';
import { PersonCreateWithoutCustomersInput } from './person-create-without-customers.input';

@InputType()
export class PersonCreateOrConnectWithoutCustomersInput {

    @Field(() => PersonWhereUniqueInput, {nullable:false})
    @Type(() => PersonWhereUniqueInput)
    where!: Prisma.AtLeast<PersonWhereUniqueInput, 'personId'>;

    @Field(() => PersonCreateWithoutCustomersInput, {nullable:false})
    @Type(() => PersonCreateWithoutCustomersInput)
    create!: PersonCreateWithoutCustomersInput;
}
