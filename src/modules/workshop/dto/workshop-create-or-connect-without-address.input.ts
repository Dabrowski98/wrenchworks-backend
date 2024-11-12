import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopCreateWithoutAddressInput } from './workshop-create-without-address.input';

@InputType()
export class WorkshopCreateOrConnectWithoutAddressInput {

    @Field(() => WorkshopWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;

    @Field(() => WorkshopCreateWithoutAddressInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutAddressInput)
    create!: WorkshopCreateWithoutAddressInput;
}
