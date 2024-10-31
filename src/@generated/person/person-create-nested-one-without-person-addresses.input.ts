import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonCreateWithoutPersonAddressesInput } from './person-create-without-person-addresses.input';
import { Type } from 'class-transformer';
import { PersonCreateOrConnectWithoutPersonAddressesInput } from './person-create-or-connect-without-person-addresses.input';
import { Prisma } from '@prisma/client';
import { PersonWhereUniqueInput } from './person-where-unique.input';

@InputType()
export class PersonCreateNestedOneWithoutPersonAddressesInput {

    @Field(() => PersonCreateWithoutPersonAddressesInput, {nullable:true})
    @Type(() => PersonCreateWithoutPersonAddressesInput)
    create?: PersonCreateWithoutPersonAddressesInput;

    @Field(() => PersonCreateOrConnectWithoutPersonAddressesInput, {nullable:true})
    @Type(() => PersonCreateOrConnectWithoutPersonAddressesInput)
    connectOrCreate?: PersonCreateOrConnectWithoutPersonAddressesInput;

    @Field(() => PersonWhereUniqueInput, {nullable:true})
    @Type(() => PersonWhereUniqueInput)
    connect?: Prisma.AtLeast<PersonWhereUniqueInput, 'personId'>;
}
