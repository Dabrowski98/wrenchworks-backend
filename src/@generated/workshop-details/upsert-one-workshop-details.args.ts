import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopDetailsWhereUniqueInput } from './workshop-details-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopDetailsCreateInput } from './workshop-details-create.input';
import { WorkshopDetailsUpdateInput } from './workshop-details-update.input';

@ArgsType()
export class UpsertOneWorkshopDetailsArgs {

    @Field(() => WorkshopDetailsWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopDetailsWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopDetailsWhereUniqueInput, 'workshopId'>;

    @Field(() => WorkshopDetailsCreateInput, {nullable:false})
    @Type(() => WorkshopDetailsCreateInput)
    create!: WorkshopDetailsCreateInput;

    @Field(() => WorkshopDetailsUpdateInput, {nullable:false})
    @Type(() => WorkshopDetailsUpdateInput)
    update!: WorkshopDetailsUpdateInput;
}
