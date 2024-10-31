import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutWorkshopJobCategoriesInput } from './workshop-create-without-workshop-job-categories.input';
import { Type } from 'class-transformer';
import { WorkshopCreateOrConnectWithoutWorkshopJobCategoriesInput } from './workshop-create-or-connect-without-workshop-job-categories.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';

@InputType()
export class WorkshopCreateNestedOneWithoutWorkshopJobCategoriesInput {

    @Field(() => WorkshopCreateWithoutWorkshopJobCategoriesInput, {nullable:true})
    @Type(() => WorkshopCreateWithoutWorkshopJobCategoriesInput)
    create?: WorkshopCreateWithoutWorkshopJobCategoriesInput;

    @Field(() => WorkshopCreateOrConnectWithoutWorkshopJobCategoriesInput, {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutWorkshopJobCategoriesInput)
    connectOrCreate?: WorkshopCreateOrConnectWithoutWorkshopJobCategoriesInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;
}
