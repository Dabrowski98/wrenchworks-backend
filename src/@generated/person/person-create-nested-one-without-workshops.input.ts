import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonCreateWithoutWorkshopsInput } from './person-create-without-workshops.input';
import { Type } from 'class-transformer';
import { PersonCreateOrConnectWithoutWorkshopsInput } from './person-create-or-connect-without-workshops.input';
import { Prisma } from '@prisma/client';
import { PersonWhereUniqueInput } from './person-where-unique.input';

@InputType()
export class PersonCreateNestedOneWithoutWorkshopsInput {

    @Field(() => PersonCreateWithoutWorkshopsInput, {nullable:true})
    @Type(() => PersonCreateWithoutWorkshopsInput)
    create?: PersonCreateWithoutWorkshopsInput;

    @Field(() => PersonCreateOrConnectWithoutWorkshopsInput, {nullable:true})
    @Type(() => PersonCreateOrConnectWithoutWorkshopsInput)
    connectOrCreate?: PersonCreateOrConnectWithoutWorkshopsInput;

    @Field(() => PersonWhereUniqueInput, {nullable:true})
    @Type(() => PersonWhereUniqueInput)
    connect?: Prisma.AtLeast<PersonWhereUniqueInput, 'personId'>;
}
