import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopCreateWithoutAddressesInput } from './workshop-create-without-addresses.input';

@InputType()
export class WorkshopCreateOrConnectWithoutAddressesInput {

    @Field(() => WorkshopWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;

    @Field(() => WorkshopCreateWithoutAddressesInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutAddressesInput)
    create!: WorkshopCreateWithoutAddressesInput;
}
