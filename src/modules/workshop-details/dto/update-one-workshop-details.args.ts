import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDetailsUpdateInput } from './workshop-details-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { WorkshopDetailsWhereUniqueInput } from './workshop-details-where-unique.input';
import * as Validator from 'class-validator';

@ArgsType()
export class UpdateOneWorkshopDetailsArgs {

    @Field(() => WorkshopDetailsUpdateInput, {nullable:false})
    @Type(() => WorkshopDetailsUpdateInput)
    @Validator.ValidateNested()
    data!: WorkshopDetailsUpdateInput;

    @Field(() => WorkshopDetailsWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopDetailsWhereUniqueInput)
    @Validator.Allow()  
    where!: Prisma.AtLeast<WorkshopDetailsWhereUniqueInput, 'workshopId'>;
}
