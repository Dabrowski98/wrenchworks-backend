import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDetailsUpdateInput } from './workshop-details-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { WorkshopDetailsWhereUniqueInput } from './workshop-details-where-unique.input';

@ArgsType()
export class UpdateOneWorkshopDetailsArgs {

    @Field(() => WorkshopDetailsUpdateInput, {nullable:false})
    @Type(() => WorkshopDetailsUpdateInput)
    data!: WorkshopDetailsUpdateInput;

    @Field(() => WorkshopDetailsWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopDetailsWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopDetailsWhereUniqueInput, 'workshopId'>;
}
