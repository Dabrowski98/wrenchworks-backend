import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopJobWhereInput } from './workshop-job-where.input';
import { Type } from 'class-transformer';
import { WorkshopJobOrderByWithRelationInput } from './workshop-job-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { WorkshopJobWhereUniqueInput } from './workshop-job-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WorkshopJobScalarFieldEnum } from './workshop-job-scalar-field.enum';

@ArgsType()
export class FindFirstWorkshopJobArgs {

    @Field(() => WorkshopJobWhereInput, {nullable:true})
    @Type(() => WorkshopJobWhereInput)
    where?: WorkshopJobWhereInput;

    @Field(() => [WorkshopJobOrderByWithRelationInput], {nullable:true})
    @Type(() => WorkshopJobOrderByWithRelationInput)
    orderBy?: Array<WorkshopJobOrderByWithRelationInput>;

    @Field(() => WorkshopJobWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopJobWhereUniqueInput)
    cursor?: Prisma.AtLeast<WorkshopJobWhereUniqueInput, 'workshopJobId' | 'workshopId_jobId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [WorkshopJobScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof WorkshopJobScalarFieldEnum>;
}
