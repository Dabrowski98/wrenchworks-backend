import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWorkshopCreateWithoutAddressInput } from './address-workshop-create-without-address.input';
import { Type } from 'class-transformer';
import { AddressWorkshopCreateOrConnectWithoutAddressInput } from './address-workshop-create-or-connect-without-address.input';
import { AddressWorkshopUpsertWithWhereUniqueWithoutAddressInput } from './address-workshop-upsert-with-where-unique-without-address.input';
import { AddressWorkshopCreateManyAddressInputEnvelope } from './address-workshop-create-many-address-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AddressWorkshopWhereUniqueInput } from './address-workshop-where-unique.input';
import { AddressWorkshopUpdateWithWhereUniqueWithoutAddressInput } from './address-workshop-update-with-where-unique-without-address.input';
import { AddressWorkshopUpdateManyWithWhereWithoutAddressInput } from './address-workshop-update-many-with-where-without-address.input';
import { AddressWorkshopScalarWhereInput } from './address-workshop-scalar-where.input';

@InputType()
export class AddressWorkshopUncheckedUpdateManyWithoutAddressNestedInput {

    @Field(() => [AddressWorkshopCreateWithoutAddressInput], {nullable:true})
    @Type(() => AddressWorkshopCreateWithoutAddressInput)
    create?: Array<AddressWorkshopCreateWithoutAddressInput>;

    @Field(() => [AddressWorkshopCreateOrConnectWithoutAddressInput], {nullable:true})
    @Type(() => AddressWorkshopCreateOrConnectWithoutAddressInput)
    connectOrCreate?: Array<AddressWorkshopCreateOrConnectWithoutAddressInput>;

    @Field(() => [AddressWorkshopUpsertWithWhereUniqueWithoutAddressInput], {nullable:true})
    @Type(() => AddressWorkshopUpsertWithWhereUniqueWithoutAddressInput)
    upsert?: Array<AddressWorkshopUpsertWithWhereUniqueWithoutAddressInput>;

    @Field(() => AddressWorkshopCreateManyAddressInputEnvelope, {nullable:true})
    @Type(() => AddressWorkshopCreateManyAddressInputEnvelope)
    createMany?: AddressWorkshopCreateManyAddressInputEnvelope;

    @Field(() => [AddressWorkshopWhereUniqueInput], {nullable:true})
    @Type(() => AddressWorkshopWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AddressWorkshopWhereUniqueInput, 'addressId_workshopId'>>;

    @Field(() => [AddressWorkshopWhereUniqueInput], {nullable:true})
    @Type(() => AddressWorkshopWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AddressWorkshopWhereUniqueInput, 'addressId_workshopId'>>;

    @Field(() => [AddressWorkshopWhereUniqueInput], {nullable:true})
    @Type(() => AddressWorkshopWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AddressWorkshopWhereUniqueInput, 'addressId_workshopId'>>;

    @Field(() => [AddressWorkshopWhereUniqueInput], {nullable:true})
    @Type(() => AddressWorkshopWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AddressWorkshopWhereUniqueInput, 'addressId_workshopId'>>;

    @Field(() => [AddressWorkshopUpdateWithWhereUniqueWithoutAddressInput], {nullable:true})
    @Type(() => AddressWorkshopUpdateWithWhereUniqueWithoutAddressInput)
    update?: Array<AddressWorkshopUpdateWithWhereUniqueWithoutAddressInput>;

    @Field(() => [AddressWorkshopUpdateManyWithWhereWithoutAddressInput], {nullable:true})
    @Type(() => AddressWorkshopUpdateManyWithWhereWithoutAddressInput)
    updateMany?: Array<AddressWorkshopUpdateManyWithWhereWithoutAddressInput>;

    @Field(() => [AddressWorkshopScalarWhereInput], {nullable:true})
    @Type(() => AddressWorkshopScalarWhereInput)
    deleteMany?: Array<AddressWorkshopScalarWhereInput>;
}
