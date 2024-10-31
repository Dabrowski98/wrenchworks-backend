import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonCreateWithoutUserInput } from './person-create-without-user.input';
import { Type } from 'class-transformer';
import { PersonCreateOrConnectWithoutUserInput } from './person-create-or-connect-without-user.input';
import { PersonUpsertWithoutUserInput } from './person-upsert-without-user.input';
import { PersonWhereInput } from './person-where.input';
import { Prisma } from '@prisma/client';
import { PersonWhereUniqueInput } from './person-where-unique.input';
import { PersonUpdateToOneWithWhereWithoutUserInput } from './person-update-to-one-with-where-without-user.input';

@InputType()
export class PersonUpdateOneWithoutUserNestedInput {

    @Field(() => PersonCreateWithoutUserInput, {nullable:true})
    @Type(() => PersonCreateWithoutUserInput)
    create?: PersonCreateWithoutUserInput;

    @Field(() => PersonCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => PersonCreateOrConnectWithoutUserInput)
    connectOrCreate?: PersonCreateOrConnectWithoutUserInput;

    @Field(() => PersonUpsertWithoutUserInput, {nullable:true})
    @Type(() => PersonUpsertWithoutUserInput)
    upsert?: PersonUpsertWithoutUserInput;

    @Field(() => PersonWhereInput, {nullable:true})
    @Type(() => PersonWhereInput)
    disconnect?: PersonWhereInput;

    @Field(() => PersonWhereInput, {nullable:true})
    @Type(() => PersonWhereInput)
    delete?: PersonWhereInput;

    @Field(() => PersonWhereUniqueInput, {nullable:true})
    @Type(() => PersonWhereUniqueInput)
    connect?: Prisma.AtLeast<PersonWhereUniqueInput, 'personId'>;

    @Field(() => PersonUpdateToOneWithWhereWithoutUserInput, {nullable:true})
    @Type(() => PersonUpdateToOneWithWhereWithoutUserInput)
    update?: PersonUpdateToOneWithWhereWithoutUserInput;
}
