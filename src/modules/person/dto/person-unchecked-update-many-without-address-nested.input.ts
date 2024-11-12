import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonCreateWithoutAddressInput } from './person-create-without-address.input';
import { Type } from 'class-transformer';
import { PersonCreateOrConnectWithoutAddressInput } from './person-create-or-connect-without-address.input';
import { PersonUpsertWithWhereUniqueWithoutAddressInput } from './person-upsert-with-where-unique-without-address.input';
import { PersonCreateManyAddressInputEnvelope } from './person-create-many-address-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PersonWhereUniqueInput } from './person-where-unique.input';
import { PersonUpdateWithWhereUniqueWithoutAddressInput } from './person-update-with-where-unique-without-address.input';
import { PersonUpdateManyWithWhereWithoutAddressInput } from './person-update-many-with-where-without-address.input';
import { PersonScalarWhereInput } from './person-scalar-where.input';

@InputType()
export class PersonUncheckedUpdateManyWithoutAddressNestedInput {

    @Field(() => [PersonCreateWithoutAddressInput], {nullable:true})
    @Type(() => PersonCreateWithoutAddressInput)
    create?: Array<PersonCreateWithoutAddressInput>;

    @Field(() => [PersonCreateOrConnectWithoutAddressInput], {nullable:true})
    @Type(() => PersonCreateOrConnectWithoutAddressInput)
    connectOrCreate?: Array<PersonCreateOrConnectWithoutAddressInput>;

    @Field(() => [PersonUpsertWithWhereUniqueWithoutAddressInput], {nullable:true})
    @Type(() => PersonUpsertWithWhereUniqueWithoutAddressInput)
    upsert?: Array<PersonUpsertWithWhereUniqueWithoutAddressInput>;

    @Field(() => PersonCreateManyAddressInputEnvelope, {nullable:true})
    @Type(() => PersonCreateManyAddressInputEnvelope)
    createMany?: PersonCreateManyAddressInputEnvelope;

    @Field(() => [PersonWhereUniqueInput], {nullable:true})
    @Type(() => PersonWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PersonWhereUniqueInput, 'personId'>>;

    @Field(() => [PersonWhereUniqueInput], {nullable:true})
    @Type(() => PersonWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PersonWhereUniqueInput, 'personId'>>;

    @Field(() => [PersonWhereUniqueInput], {nullable:true})
    @Type(() => PersonWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PersonWhereUniqueInput, 'personId'>>;

    @Field(() => [PersonWhereUniqueInput], {nullable:true})
    @Type(() => PersonWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PersonWhereUniqueInput, 'personId'>>;

    @Field(() => [PersonUpdateWithWhereUniqueWithoutAddressInput], {nullable:true})
    @Type(() => PersonUpdateWithWhereUniqueWithoutAddressInput)
    update?: Array<PersonUpdateWithWhereUniqueWithoutAddressInput>;

    @Field(() => [PersonUpdateManyWithWhereWithoutAddressInput], {nullable:true})
    @Type(() => PersonUpdateManyWithWhereWithoutAddressInput)
    updateMany?: Array<PersonUpdateManyWithWhereWithoutAddressInput>;

    @Field(() => [PersonScalarWhereInput], {nullable:true})
    @Type(() => PersonScalarWhereInput)
    deleteMany?: Array<PersonScalarWhereInput>;
}
