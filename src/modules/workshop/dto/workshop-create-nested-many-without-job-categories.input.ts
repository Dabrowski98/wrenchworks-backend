import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutJobCategoriesInput } from './workshop-create-without-job-categories.input';
import { Type } from 'class-transformer';
import { WorkshopCreateOrConnectWithoutJobCategoriesInput } from './workshop-create-or-connect-without-job-categories.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';

@InputType()
export class WorkshopCreateNestedManyWithoutJobCategoriesInput {

    @Field(() => [WorkshopCreateWithoutJobCategoriesInput], {nullable:true})
    @Type(() => WorkshopCreateWithoutJobCategoriesInput)
    create?: Array<WorkshopCreateWithoutJobCategoriesInput>;

    @Field(() => [WorkshopCreateOrConnectWithoutJobCategoriesInput], {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutJobCategoriesInput)
    connectOrCreate?: Array<WorkshopCreateOrConnectWithoutJobCategoriesInput>;

    @Field(() => [WorkshopWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>>;
}
