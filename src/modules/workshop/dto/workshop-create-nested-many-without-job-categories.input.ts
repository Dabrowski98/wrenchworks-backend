import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutJobCategoriesInput } from './workshop-create-without-job-categories.input';
import { HideField } from '@nestjs/graphql';
import { WorkshopCreateOrConnectWithoutJobCategoriesInput } from './workshop-create-or-connect-without-job-categories.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class WorkshopCreateNestedManyWithoutJobCategoriesInput {

    @HideField()
    create?: Array<WorkshopCreateWithoutJobCategoriesInput>;

    @HideField()
    connectOrCreate?: Array<WorkshopCreateOrConnectWithoutJobCategoriesInput>;

    @Field(() => [WorkshopWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId' | 'email'>>;
}
