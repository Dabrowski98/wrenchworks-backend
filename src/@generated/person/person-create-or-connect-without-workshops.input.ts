import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PersonWhereUniqueInput } from './person-where-unique.input';
import { Type } from 'class-transformer';
import { PersonCreateWithoutWorkshopsInput } from './person-create-without-workshops.input';

@InputType()
export class PersonCreateOrConnectWithoutWorkshopsInput {

    @Field(() => PersonWhereUniqueInput, {nullable:false})
    @Type(() => PersonWhereUniqueInput)
    where!: Prisma.AtLeast<PersonWhereUniqueInput, 'personId'>;

    @Field(() => PersonCreateWithoutWorkshopsInput, {nullable:false})
    @Type(() => PersonCreateWithoutWorkshopsInput)
    create!: PersonCreateWithoutWorkshopsInput;
}
