import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopUpdateWithoutAddressInput } from './workshop-update-without-address.input';

@InputType()
export class WorkshopUpdateWithWhereUniqueWithoutAddressInput {

    @Field(() => WorkshopWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;

    @Field(() => WorkshopUpdateWithoutAddressInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutAddressInput)
    data!: WorkshopUpdateWithoutAddressInput;
}
