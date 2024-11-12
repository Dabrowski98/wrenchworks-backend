import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonCreateWithoutAddressInput } from './person-create-without-address.input';
import { Type } from 'class-transformer';
import { PersonCreateOrConnectWithoutAddressInput } from './person-create-or-connect-without-address.input';
import { PersonCreateManyAddressInputEnvelope } from './person-create-many-address-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PersonWhereUniqueInput } from './person-where-unique.input';

@InputType()
export class PersonUncheckedCreateNestedManyWithoutAddressInput {

    @Field(() => [PersonCreateWithoutAddressInput], {nullable:true})
    @Type(() => PersonCreateWithoutAddressInput)
    create?: Array<PersonCreateWithoutAddressInput>;

    @Field(() => [PersonCreateOrConnectWithoutAddressInput], {nullable:true})
    @Type(() => PersonCreateOrConnectWithoutAddressInput)
    connectOrCreate?: Array<PersonCreateOrConnectWithoutAddressInput>;

    @Field(() => PersonCreateManyAddressInputEnvelope, {nullable:true})
    @Type(() => PersonCreateManyAddressInputEnvelope)
    createMany?: PersonCreateManyAddressInputEnvelope;

    @Field(() => [PersonWhereUniqueInput], {nullable:true})
    @Type(() => PersonWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PersonWhereUniqueInput, 'personId'>>;
}
