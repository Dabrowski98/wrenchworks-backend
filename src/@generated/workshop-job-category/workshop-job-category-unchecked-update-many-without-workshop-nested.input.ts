import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopJobCategoryCreateWithoutWorkshopInput } from './workshop-job-category-create-without-workshop.input';
import { Type } from 'class-transformer';
import { WorkshopJobCategoryCreateOrConnectWithoutWorkshopInput } from './workshop-job-category-create-or-connect-without-workshop.input';
import { WorkshopJobCategoryUpsertWithWhereUniqueWithoutWorkshopInput } from './workshop-job-category-upsert-with-where-unique-without-workshop.input';
import { WorkshopJobCategoryCreateManyWorkshopInputEnvelope } from './workshop-job-category-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { WorkshopJobCategoryWhereUniqueInput } from './workshop-job-category-where-unique.input';
import { WorkshopJobCategoryUpdateWithWhereUniqueWithoutWorkshopInput } from './workshop-job-category-update-with-where-unique-without-workshop.input';
import { WorkshopJobCategoryUpdateManyWithWhereWithoutWorkshopInput } from './workshop-job-category-update-many-with-where-without-workshop.input';
import { WorkshopJobCategoryScalarWhereInput } from './workshop-job-category-scalar-where.input';

@InputType()
export class WorkshopJobCategoryUncheckedUpdateManyWithoutWorkshopNestedInput {

    @Field(() => [WorkshopJobCategoryCreateWithoutWorkshopInput], {nullable:true})
    @Type(() => WorkshopJobCategoryCreateWithoutWorkshopInput)
    create?: Array<WorkshopJobCategoryCreateWithoutWorkshopInput>;

    @Field(() => [WorkshopJobCategoryCreateOrConnectWithoutWorkshopInput], {nullable:true})
    @Type(() => WorkshopJobCategoryCreateOrConnectWithoutWorkshopInput)
    connectOrCreate?: Array<WorkshopJobCategoryCreateOrConnectWithoutWorkshopInput>;

    @Field(() => [WorkshopJobCategoryUpsertWithWhereUniqueWithoutWorkshopInput], {nullable:true})
    @Type(() => WorkshopJobCategoryUpsertWithWhereUniqueWithoutWorkshopInput)
    upsert?: Array<WorkshopJobCategoryUpsertWithWhereUniqueWithoutWorkshopInput>;

    @Field(() => WorkshopJobCategoryCreateManyWorkshopInputEnvelope, {nullable:true})
    @Type(() => WorkshopJobCategoryCreateManyWorkshopInputEnvelope)
    createMany?: WorkshopJobCategoryCreateManyWorkshopInputEnvelope;

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

    @Field(() => [WorkshopJobCategoryUpdateWithWhereUniqueWithoutWorkshopInput], {nullable:true})
    @Type(() => WorkshopJobCategoryUpdateWithWhereUniqueWithoutWorkshopInput)
    update?: Array<WorkshopJobCategoryUpdateWithWhereUniqueWithoutWorkshopInput>;

    @Field(() => [WorkshopJobCategoryUpdateManyWithWhereWithoutWorkshopInput], {nullable:true})
    @Type(() => WorkshopJobCategoryUpdateManyWithWhereWithoutWorkshopInput)
    updateMany?: Array<WorkshopJobCategoryUpdateManyWithWhereWithoutWorkshopInput>;

    @Field(() => [WorkshopJobCategoryScalarWhereInput], {nullable:true})
    @Type(() => WorkshopJobCategoryScalarWhereInput)
    deleteMany?: Array<WorkshopJobCategoryScalarWhereInput>;
}
