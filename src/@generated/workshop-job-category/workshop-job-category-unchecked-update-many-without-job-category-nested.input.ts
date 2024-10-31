import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopJobCategoryCreateWithoutJobCategoryInput } from './workshop-job-category-create-without-job-category.input';
import { Type } from 'class-transformer';
import { WorkshopJobCategoryCreateOrConnectWithoutJobCategoryInput } from './workshop-job-category-create-or-connect-without-job-category.input';
import { WorkshopJobCategoryUpsertWithWhereUniqueWithoutJobCategoryInput } from './workshop-job-category-upsert-with-where-unique-without-job-category.input';
import { WorkshopJobCategoryCreateManyJobCategoryInputEnvelope } from './workshop-job-category-create-many-job-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { WorkshopJobCategoryWhereUniqueInput } from './workshop-job-category-where-unique.input';
import { WorkshopJobCategoryUpdateWithWhereUniqueWithoutJobCategoryInput } from './workshop-job-category-update-with-where-unique-without-job-category.input';
import { WorkshopJobCategoryUpdateManyWithWhereWithoutJobCategoryInput } from './workshop-job-category-update-many-with-where-without-job-category.input';
import { WorkshopJobCategoryScalarWhereInput } from './workshop-job-category-scalar-where.input';

@InputType()
export class WorkshopJobCategoryUncheckedUpdateManyWithoutJobCategoryNestedInput {

    @Field(() => [WorkshopJobCategoryCreateWithoutJobCategoryInput], {nullable:true})
    @Type(() => WorkshopJobCategoryCreateWithoutJobCategoryInput)
    create?: Array<WorkshopJobCategoryCreateWithoutJobCategoryInput>;

    @Field(() => [WorkshopJobCategoryCreateOrConnectWithoutJobCategoryInput], {nullable:true})
    @Type(() => WorkshopJobCategoryCreateOrConnectWithoutJobCategoryInput)
    connectOrCreate?: Array<WorkshopJobCategoryCreateOrConnectWithoutJobCategoryInput>;

    @Field(() => [WorkshopJobCategoryUpsertWithWhereUniqueWithoutJobCategoryInput], {nullable:true})
    @Type(() => WorkshopJobCategoryUpsertWithWhereUniqueWithoutJobCategoryInput)
    upsert?: Array<WorkshopJobCategoryUpsertWithWhereUniqueWithoutJobCategoryInput>;

    @Field(() => WorkshopJobCategoryCreateManyJobCategoryInputEnvelope, {nullable:true})
    @Type(() => WorkshopJobCategoryCreateManyJobCategoryInputEnvelope)
    createMany?: WorkshopJobCategoryCreateManyJobCategoryInputEnvelope;

    @Field(() => [WorkshopJobCategoryWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopJobCategoryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<WorkshopJobCategoryWhereUniqueInput, 'workshopId_categoryId'>>;

    @Field(() => [WorkshopJobCategoryWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopJobCategoryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<WorkshopJobCategoryWhereUniqueInput, 'workshopId_categoryId'>>;

    @Field(() => [WorkshopJobCategoryWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopJobCategoryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<WorkshopJobCategoryWhereUniqueInput, 'workshopId_categoryId'>>;

    @Field(() => [WorkshopJobCategoryWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopJobCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<WorkshopJobCategoryWhereUniqueInput, 'workshopId_categoryId'>>;

    @Field(() => [WorkshopJobCategoryUpdateWithWhereUniqueWithoutJobCategoryInput], {nullable:true})
    @Type(() => WorkshopJobCategoryUpdateWithWhereUniqueWithoutJobCategoryInput)
    update?: Array<WorkshopJobCategoryUpdateWithWhereUniqueWithoutJobCategoryInput>;

    @Field(() => [WorkshopJobCategoryUpdateManyWithWhereWithoutJobCategoryInput], {nullable:true})
    @Type(() => WorkshopJobCategoryUpdateManyWithWhereWithoutJobCategoryInput)
    updateMany?: Array<WorkshopJobCategoryUpdateManyWithWhereWithoutJobCategoryInput>;

    @Field(() => [WorkshopJobCategoryScalarWhereInput], {nullable:true})
    @Type(() => WorkshopJobCategoryScalarWhereInput)
    deleteMany?: Array<WorkshopJobCategoryScalarWhereInput>;
}
