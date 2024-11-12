import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonCreateWithoutCustomersInput } from './person-create-without-customers.input';
import { Type } from 'class-transformer';
import { PersonCreateOrConnectWithoutCustomersInput } from './person-create-or-connect-without-customers.input';
import { Prisma } from '@prisma/client';
import { PersonWhereUniqueInput } from './person-where-unique.input';

@InputType()
export class PersonCreateNestedOneWithoutCustomersInput {

    @Field(() => PersonCreateWithoutCustomersInput, {nullable:true})
    @Type(() => PersonCreateWithoutCustomersInput)
    create?: PersonCreateWithoutCustomersInput;

    @Field(() => PersonCreateOrConnectWithoutCustomersInput, {nullable:true})
    @Type(() => PersonCreateOrConnectWithoutCustomersInput)
    connectOrCreate?: PersonCreateOrConnectWithoutCustomersInput;

    @Field(() => PersonWhereUniqueInput, {nullable:true})
    @Type(() => PersonWhereUniqueInput)
    connect?: Prisma.AtLeast<PersonWhereUniqueInput, 'personId'>;
}
