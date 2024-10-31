import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWorkshopCreateWithoutWorkshopInput } from './address-workshop-create-without-workshop.input';
import { Type } from 'class-transformer';
import { AddressWorkshopCreateOrConnectWithoutWorkshopInput } from './address-workshop-create-or-connect-without-workshop.input';
import { AddressWorkshopCreateManyWorkshopInputEnvelope } from './address-workshop-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AddressWorkshopWhereUniqueInput } from './address-workshop-where-unique.input';

@InputType()
export class AddressWorkshopCreateNestedManyWithoutWorkshopInput {

    @Field(() => [AddressWorkshopCreateWithoutWorkshopInput], {nullable:true})
    @Type(() => AddressWorkshopCreateWithoutWorkshopInput)
    create?: Array<AddressWorkshopCreateWithoutWorkshopInput>;

    @Field(() => [AddressWorkshopCreateOrConnectWithoutWorkshopInput], {nullable:true})
    @Type(() => AddressWorkshopCreateOrConnectWithoutWorkshopInput)
    connectOrCreate?: Array<AddressWorkshopCreateOrConnectWithoutWorkshopInput>;

    @Field(() => AddressWorkshopCreateManyWorkshopInputEnvelope, {nullable:true})
    @Type(() => AddressWorkshopCreateManyWorkshopInputEnvelope)
    createMany?: AddressWorkshopCreateManyWorkshopInputEnvelope;

    @Field(() => [AddressWorkshopWhereUniqueInput], {nullable:true})
    @Type(() => AddressWorkshopWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AddressWorkshopWhereUniqueInput, 'addressId_workshopId'>>;
}
