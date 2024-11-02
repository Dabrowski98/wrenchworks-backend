import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutWorkshopsInput } from './address-create-without-workshops.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutWorkshopsInput } from './address-create-or-connect-without-workshops.input';
import { AddressUpsertWithWhereUniqueWithoutWorkshopsInput } from './address-upsert-with-where-unique-without-workshops.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressUpdateWithWhereUniqueWithoutWorkshopsInput } from './address-update-with-where-unique-without-workshops.input';
import { AddressUpdateManyWithWhereWithoutWorkshopsInput } from './address-update-many-with-where-without-workshops.input';
import { AddressScalarWhereInput } from './address-scalar-where.input';

@InputType()
export class AddressUncheckedUpdateManyWithoutWorkshopsNestedInput {

    @Field(() => [AddressCreateWithoutWorkshopsInput], {nullable:true})
    @Type(() => AddressCreateWithoutWorkshopsInput)
    create?: Array<AddressCreateWithoutWorkshopsInput>;

    @Field(() => [AddressCreateOrConnectWithoutWorkshopsInput], {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutWorkshopsInput)
    connectOrCreate?: Array<AddressCreateOrConnectWithoutWorkshopsInput>;

    @Field(() => [AddressUpsertWithWhereUniqueWithoutWorkshopsInput], {nullable:true})
    @Type(() => AddressUpsertWithWhereUniqueWithoutWorkshopsInput)
    upsert?: Array<AddressUpsertWithWhereUniqueWithoutWorkshopsInput>;

    @Field(() => [AddressWhereUniqueInput], {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'addressId'>>;

    @Field(() => [AddressWhereUniqueInput], {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'addressId'>>;

    @Field(() => [AddressWhereUniqueInput], {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'addressId'>>;

    @Field(() => [AddressWhereUniqueInput], {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'addressId'>>;

    @Field(() => [AddressUpdateWithWhereUniqueWithoutWorkshopsInput], {nullable:true})
    @Type(() => AddressUpdateWithWhereUniqueWithoutWorkshopsInput)
    update?: Array<AddressUpdateWithWhereUniqueWithoutWorkshopsInput>;

    @Field(() => [AddressUpdateManyWithWhereWithoutWorkshopsInput], {nullable:true})
    @Type(() => AddressUpdateManyWithWhereWithoutWorkshopsInput)
    updateMany?: Array<AddressUpdateManyWithWhereWithoutWorkshopsInput>;

    @Field(() => [AddressScalarWhereInput], {nullable:true})
    @Type(() => AddressScalarWhereInput)
    deleteMany?: Array<AddressScalarWhereInput>;
}
