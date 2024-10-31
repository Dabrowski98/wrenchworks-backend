import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopJobCategoryCreateWithoutJobCategoryInput } from './workshop-job-category-create-without-job-category.input';
import { Type } from 'class-transformer';
import { WorkshopJobCategoryCreateOrConnectWithoutJobCategoryInput } from './workshop-job-category-create-or-connect-without-job-category.input';
import { WorkshopJobCategoryCreateManyJobCategoryInputEnvelope } from './workshop-job-category-create-many-job-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { WorkshopJobCategoryWhereUniqueInput } from './workshop-job-category-where-unique.input';

@InputType()
export class WorkshopJobCategoryUncheckedCreateNestedManyWithoutJobCategoryInput {

    @Field(() => [WorkshopJobCategoryCreateWithoutJobCategoryInput], {nullable:true})
    @Type(() => WorkshopJobCategoryCreateWithoutJobCategoryInput)
    create?: Array<WorkshopJobCategoryCreateWithoutJobCategoryInput>;

    @Field(() => [WorkshopJobCategoryCreateOrConnectWithoutJobCategoryInput], {nullable:true})
    @Type(() => WorkshopJobCategoryCreateOrConnectWithoutJobCategoryInput)
    connectOrCreate?: Array<WorkshopJobCategoryCreateOrConnectWithoutJobCategoryInput>;

    @Field(() => WorkshopJobCategoryCreateManyJobCategoryInputEnvelope, {nullable:true})
    @Type(() => WorkshopJobCategoryCreateManyJobCategoryInputEnvelope)
    createMany?: WorkshopJobCategoryCreateManyJobCategoryInputEnvelope;

    @Field(() => [WorkshopJobCategoryWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopJobCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<WorkshopJobCategoryWhereUniqueInput, 'workshopId_categoryId'>>;
}
