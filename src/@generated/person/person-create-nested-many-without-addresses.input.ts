import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonCreateWithoutAddressesInput } from './person-create-without-addresses.input';
import { Type } from 'class-transformer';
import { PersonCreateOrConnectWithoutAddressesInput } from './person-create-or-connect-without-addresses.input';
import { Prisma } from '@prisma/client';
import { PersonWhereUniqueInput } from './person-where-unique.input';

@InputType()
export class PersonCreateNestedManyWithoutAddressesInput {

    @Field(() => [PersonCreateWithoutAddressesInput], {nullable:true})
    @Type(() => PersonCreateWithoutAddressesInput)
    create?: Array<PersonCreateWithoutAddressesInput>;

    @Field(() => [PersonCreateOrConnectWithoutAddressesInput], {nullable:true})
    @Type(() => PersonCreateOrConnectWithoutAddressesInput)
    connectOrCreate?: Array<PersonCreateOrConnectWithoutAddressesInput>;

    @Field(() => [PersonWhereUniqueInput], {nullable:true})
    @Type(() => PersonWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PersonWhereUniqueInput, 'personId'>>;
}
