import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopDetailsWhereUniqueInput } from './workshop-details-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueWorkshopDetailsOrThrowArgs {

    @Field(() => WorkshopDetailsWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopDetailsWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopDetailsWhereUniqueInput, 'workshopId'>;
}
