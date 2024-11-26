import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JoinWorkshopRequestWhereInput } from './join-workshop-request-where.input';
import { Type } from 'class-transformer';
import { JoinWorkshopRequestOrderByWithRelationInput } from './join-workshop-request-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { JoinWorkshopRequestWhereUniqueInput } from './join-workshop-request-where-unique.input';
import { Int } from '@nestjs/graphql';
import { JoinWorkshopRequestScalarFieldEnum } from './join-workshop-request-scalar-field.enum';

@ArgsType()
export class FindFirstJoinWorkshopRequestArgs {

    @Field(() => JoinWorkshopRequestWhereInput, {nullable:true})
    @Type(() => JoinWorkshopRequestWhereInput)
    where?: JoinWorkshopRequestWhereInput;

    @Field(() => [JoinWorkshopRequestOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<JoinWorkshopRequestOrderByWithRelationInput>;

    @Field(() => JoinWorkshopRequestWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<JoinWorkshopRequestWhereUniqueInput, 'joinWorkshopRequestId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [JoinWorkshopRequestScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof JoinWorkshopRequestScalarFieldEnum>;
}
