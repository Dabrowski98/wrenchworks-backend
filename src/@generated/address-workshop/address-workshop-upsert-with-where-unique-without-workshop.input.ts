import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWorkshopWhereUniqueInput } from './address-workshop-where-unique.input';
import { Type } from 'class-transformer';
import { AddressWorkshopUpdateWithoutWorkshopInput } from './address-workshop-update-without-workshop.input';
import { AddressWorkshopCreateWithoutWorkshopInput } from './address-workshop-create-without-workshop.input';

@InputType()
export class AddressWorkshopUpsertWithWhereUniqueWithoutWorkshopInput {

    @Field(() => AddressWorkshopWhereUniqueInput, {nullable:false})
    @Type(() => AddressWorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWorkshopWhereUniqueInput, 'addressId_workshopId'>;

    @Field(() => AddressWorkshopUpdateWithoutWorkshopInput, {nullable:false})
    @Type(() => AddressWorkshopUpdateWithoutWorkshopInput)
    update!: AddressWorkshopUpdateWithoutWorkshopInput;

    @Field(() => AddressWorkshopCreateWithoutWorkshopInput, {nullable:false})
    @Type(() => AddressWorkshopCreateWithoutWorkshopInput)
    create!: AddressWorkshopCreateWithoutWorkshopInput;
}
