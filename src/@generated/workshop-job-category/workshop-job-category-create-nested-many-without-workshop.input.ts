import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopJobCategoryCreateWithoutWorkshopInput } from './workshop-job-category-create-without-workshop.input';
import { Type } from 'class-transformer';
import { WorkshopJobCategoryCreateOrConnectWithoutWorkshopInput } from './workshop-job-category-create-or-connect-without-workshop.input';
import { WorkshopJobCategoryCreateManyWorkshopInputEnvelope } from './workshop-job-category-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { WorkshopJobCategoryWhereUniqueInput } from './workshop-job-category-where-unique.input';

@InputType()
export class WorkshopJobCategoryCreateNestedManyWithoutWorkshopInput {

    @Field(() => [WorkshopJobCategoryCreateWithoutWorkshopInput], {nullable:true})
    @Type(() => WorkshopJobCategoryCreateWithoutWorkshopInput)
    create?: Array<WorkshopJobCategoryCreateWithoutWorkshopInput>;

    @Field(() => [WorkshopJobCategoryCreateOrConnectWithoutWorkshopInput], {nullable:true})
    @Type(() => WorkshopJobCategoryCreateOrConnectWithoutWorkshopInput)
    connectOrCreate?: Array<WorkshopJobCategoryCreateOrConnectWithoutWorkshopInput>;

    @Field(() => WorkshopJobCategoryCreateManyWorkshopInputEnvelope, {nullable:true})
    @Type(() => WorkshopJobCategoryCreateManyWorkshopInputEnvelope)
    createMany?: WorkshopJobCategoryCreateManyWorkshopInputEnvelope;

    @Field(() => [WorkshopJobCategoryWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopJobCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<WorkshopJobCategoryWhereUniqueInput, 'workshopId_categoryId'>>;
}
