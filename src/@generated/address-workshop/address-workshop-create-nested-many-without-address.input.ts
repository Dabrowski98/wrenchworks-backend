import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWorkshopCreateWithoutAddressInput } from './address-workshop-create-without-address.input';
import { Type } from 'class-transformer';
import { AddressWorkshopCreateOrConnectWithoutAddressInput } from './address-workshop-create-or-connect-without-address.input';
import { AddressWorkshopCreateManyAddressInputEnvelope } from './address-workshop-create-many-address-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AddressWorkshopWhereUniqueInput } from './address-workshop-where-unique.input';

@InputType()
export class AddressWorkshopCreateNestedManyWithoutAddressInput {

    @Field(() => [AddressWorkshopCreateWithoutAddressInput], {nullable:true})
    @Type(() => AddressWorkshopCreateWithoutAddressInput)
    create?: Array<AddressWorkshopCreateWithoutAddressInput>;

    @Field(() => [AddressWorkshopCreateOrConnectWithoutAddressInput], {nullable:true})
    @Type(() => AddressWorkshopCreateOrConnectWithoutAddressInput)
    connectOrCreate?: Array<AddressWorkshopCreateOrConnectWithoutAddressInput>;

    @Field(() => AddressWorkshopCreateManyAddressInputEnvelope, {nullable:true})
    @Type(() => AddressWorkshopCreateManyAddressInputEnvelope)
    createMany?: AddressWorkshopCreateManyAddressInputEnvelope;

    @Field(() => [AddressWorkshopWhereUniqueInput], {nullable:true})
    @Type(() => AddressWorkshopWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AddressWorkshopWhereUniqueInput, 'addressId_workshopId'>>;
}
