import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PersonWhereUniqueInput } from './person-where-unique.input';
import { Type } from 'class-transformer';
import { PersonCreateWithoutEmployeesInput } from './person-create-without-employees.input';

@InputType()
export class PersonCreateOrConnectWithoutEmployeesInput {

    @Field(() => PersonWhereUniqueInput, {nullable:false})
    @Type(() => PersonWhereUniqueInput)
    where!: Prisma.AtLeast<PersonWhereUniqueInput, 'personId'>;

    @Field(() => PersonCreateWithoutEmployeesInput, {nullable:false})
    @Type(() => PersonCreateWithoutEmployeesInput)
    create!: PersonCreateWithoutEmployeesInput;
}
