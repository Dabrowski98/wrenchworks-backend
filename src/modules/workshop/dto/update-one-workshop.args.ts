import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopUpdateInput } from './workshop-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import * as Validator from 'class-validator';
import { GraphQLBigInt } from 'graphql-scalars';

@ArgsType()
export class UpdateOneWorkshopArgs {

    @Field(() => WorkshopUpdateInput, {nullable:false})
    @Type(() => WorkshopUpdateInput)
    @Validator.ValidateNested()
    data!: WorkshopUpdateInput;

    @Field(() => GraphQLBigInt, { nullable: false })
    @Validator.IsNotEmpty()
    workshopId!: bigint | number;
}
