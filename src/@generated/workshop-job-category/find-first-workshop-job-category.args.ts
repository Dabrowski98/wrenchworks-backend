import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopJobCategoryWhereInput } from './workshop-job-category-where.input';
import { Type } from 'class-transformer';
import { WorkshopJobCategoryOrderByWithRelationInput } from './workshop-job-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { WorkshopJobCategoryWhereUniqueInput } from './workshop-job-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WorkshopJobCategoryScalarFieldEnum } from './workshop-job-category-scalar-field.enum';

@ArgsType()
export class FindFirstWorkshopJobCategoryArgs {

    @Field(() => WorkshopJobCategoryWhereInput, {nullable:true})
    @Type(() => WorkshopJobCategoryWhereInput)
    where?: WorkshopJobCategoryWhereInput;

    @Field(() => [WorkshopJobCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WorkshopJobCategoryOrderByWithRelationInput>;

    @Field(() => WorkshopJobCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<WorkshopJobCategoryWhereUniqueInput, 'workshopId_categoryId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [WorkshopJobCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof WorkshopJobCategoryScalarFieldEnum>;
}
