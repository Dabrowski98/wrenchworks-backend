import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JoinWorkshopRequestUpdateInput } from './join-workshop-request-update.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Prisma } from '@prisma/client';
import { JoinWorkshopRequestWhereUniqueInput } from './join-workshop-request-where-unique.input';

@ArgsType()
export class UpdateOneJoinWorkshopRequestArgs {

    @Field(() => JoinWorkshopRequestUpdateInput, {nullable:false})
    @Type(() => JoinWorkshopRequestUpdateInput)
    @ValidateNested()
    data!: JoinWorkshopRequestUpdateInput;

    @Field(() => JoinWorkshopRequestWhereUniqueInput, {nullable:false})
    @Type(() => JoinWorkshopRequestWhereUniqueInput)
    where!: Prisma.AtLeast<JoinWorkshopRequestWhereUniqueInput, 'joinWorkshopRequestId'>;
}
