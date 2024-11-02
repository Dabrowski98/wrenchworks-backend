import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonCreateWithoutAddressesInput } from './person-create-without-addresses.input';
import { Type } from 'class-transformer';
import { PersonCreateOrConnectWithoutAddressesInput } from './person-create-or-connect-without-addresses.input';
import { PersonUpsertWithWhereUniqueWithoutAddressesInput } from './person-upsert-with-where-unique-without-addresses.input';
import { Prisma } from '@prisma/client';
import { PersonWhereUniqueInput } from './person-where-unique.input';
import { PersonUpdateWithWhereUniqueWithoutAddressesInput } from './person-update-with-where-unique-without-addresses.input';
import { PersonUpdateManyWithWhereWithoutAddressesInput } from './person-update-many-with-where-without-addresses.input';
import { PersonScalarWhereInput } from './person-scalar-where.input';

@InputType()
export class PersonUpdateManyWithoutAddressesNestedInput {

    @Field(() => [PersonCreateWithoutAddressesInput], {nullable:true})
    @Type(() => PersonCreateWithoutAddressesInput)
    create?: Array<PersonCreateWithoutAddressesInput>;

    @Field(() => [PersonCreateOrConnectWithoutAddressesInput], {nullable:true})
    @Type(() => PersonCreateOrConnectWithoutAddressesInput)
    connectOrCreate?: Array<PersonCreateOrConnectWithoutAddressesInput>;

    @Field(() => [PersonUpsertWithWhereUniqueWithoutAddressesInput], {nullable:true})
    @Type(() => PersonUpsertWithWhereUniqueWithoutAddressesInput)
    upsert?: Array<PersonUpsertWithWhereUniqueWithoutAddressesInput>;

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

    @Field(() => [PersonUpdateWithWhereUniqueWithoutAddressesInput], {nullable:true})
    @Type(() => PersonUpdateWithWhereUniqueWithoutAddressesInput)
    update?: Array<PersonUpdateWithWhereUniqueWithoutAddressesInput>;

    @Field(() => [PersonUpdateManyWithWhereWithoutAddressesInput], {nullable:true})
    @Type(() => PersonUpdateManyWithWhereWithoutAddressesInput)
    updateMany?: Array<PersonUpdateManyWithWhereWithoutAddressesInput>;

    @Field(() => [PersonScalarWhereInput], {nullable:true})
    @Type(() => PersonScalarWhereInput)
    deleteMany?: Array<PersonScalarWhereInput>;
}
