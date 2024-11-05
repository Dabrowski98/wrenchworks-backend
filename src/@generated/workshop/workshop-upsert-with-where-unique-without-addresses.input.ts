import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopUpdateWithoutAddressesInput } from './workshop-update-without-addresses.input';
import { WorkshopCreateWithoutAddressesInput } from './workshop-create-without-addresses.input';

@InputType()
export class WorkshopUpsertWithWhereUniqueWithoutAddressesInput {

    @Field(() => WorkshopWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;

    @Field(() => WorkshopUpdateWithoutAddressesInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutAddressesInput)
    update!: WorkshopUpdateWithoutAddressesInput;

    @Field(() => WorkshopCreateWithoutAddressesInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutAddressesInput)
    create!: WorkshopCreateWithoutAddressesInput;
}
