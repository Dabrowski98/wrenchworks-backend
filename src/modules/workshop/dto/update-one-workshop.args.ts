import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopUpdateInput } from './workshop-update.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';

@ArgsType()
export class UpdateOneWorkshopArgs {

    @Field(() => WorkshopUpdateInput, {nullable:false})
    @Type(() => WorkshopUpdateInput)
    @ValidateNested()
    data!: WorkshopUpdateInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId'>;
}
