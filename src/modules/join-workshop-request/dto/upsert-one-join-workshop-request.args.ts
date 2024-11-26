import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JoinWorkshopRequestWhereUniqueInput } from './join-workshop-request-where-unique.input';
import { Type } from 'class-transformer';
import { JoinWorkshopRequestCreateInput } from './join-workshop-request-create.input';
import { JoinWorkshopRequestUpdateInput } from './join-workshop-request-update.input';

@ArgsType()
export class UpsertOneJoinWorkshopRequestArgs {

    @Field(() => JoinWorkshopRequestWhereUniqueInput, {nullable:false})
    @Type(() => JoinWorkshopRequestWhereUniqueInput)
    where!: Prisma.AtLeast<JoinWorkshopRequestWhereUniqueInput, 'joinWorkshopRequestId'>;

    @Field(() => JoinWorkshopRequestCreateInput, {nullable:false})
    @Type(() => JoinWorkshopRequestCreateInput)
    create!: JoinWorkshopRequestCreateInput;

    @Field(() => JoinWorkshopRequestUpdateInput, {nullable:false})
    @Type(() => JoinWorkshopRequestUpdateInput)
    update!: JoinWorkshopRequestUpdateInput;
}
