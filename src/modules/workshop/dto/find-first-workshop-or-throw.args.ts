import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopWhereInput } from './workshop-where.input';
import { Type } from 'class-transformer';
import { WorkshopOrderByWithRelationInput } from './workshop-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WorkshopScalarFieldEnum } from './workshop-scalar-field.enum';

@ArgsType()
export class FindFirstWorkshopOrThrowArgs {

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;

    @Field(() => [WorkshopOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WorkshopOrderByWithRelationInput>;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [WorkshopScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof WorkshopScalarFieldEnum>;
}
