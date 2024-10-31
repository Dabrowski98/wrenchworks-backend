import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDetailsWhereInput } from './workshop-details-where.input';
import { Type } from 'class-transformer';
import { WorkshopDetailsOrderByWithRelationInput } from './workshop-details-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { WorkshopDetailsWhereUniqueInput } from './workshop-details-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WorkshopDetailsScalarFieldEnum } from './workshop-details-scalar-field.enum';

@ArgsType()
export class FindFirstWorkshopDetailsOrThrowArgs {

    @Field(() => WorkshopDetailsWhereInput, {nullable:true})
    @Type(() => WorkshopDetailsWhereInput)
    where?: WorkshopDetailsWhereInput;

    @Field(() => [WorkshopDetailsOrderByWithRelationInput], {nullable:true})
    @Type(() => WorkshopDetailsOrderByWithRelationInput)
    orderBy?: Array<WorkshopDetailsOrderByWithRelationInput>;

    @Field(() => WorkshopDetailsWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopDetailsWhereUniqueInput)
    cursor?: Prisma.AtLeast<WorkshopDetailsWhereUniqueInput, 'workshopId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [WorkshopDetailsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof WorkshopDetailsScalarFieldEnum>;
}
