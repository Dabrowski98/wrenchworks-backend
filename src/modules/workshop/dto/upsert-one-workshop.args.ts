import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopCreateInput } from './workshop-create.input';
import { WorkshopUpdateInput } from './workshop-update.input';

@ArgsType()
export class UpsertOneWorkshopArgs {

    @Field(() => WorkshopWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId'>;

    @Field(() => WorkshopCreateInput, {nullable:false})
    @Type(() => WorkshopCreateInput)
    create!: WorkshopCreateInput;

    @Field(() => WorkshopUpdateInput, {nullable:false})
    @Type(() => WorkshopUpdateInput)
    update!: WorkshopUpdateInput;
}
