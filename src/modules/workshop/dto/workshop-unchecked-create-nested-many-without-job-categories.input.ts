import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutJobCategoriesInput } from './workshop-create-without-job-categories.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopCreateOrConnectWithoutJobCategoriesInput } from './workshop-create-or-connect-without-job-categories.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';

@InputType()
export class WorkshopUncheckedCreateNestedManyWithoutJobCategoriesInput {

    @Field(() => [WorkshopCreateWithoutJobCategoriesInput], {nullable:true})
    @Type(() => WorkshopCreateWithoutJobCategoriesInput)
    @ValidateNested()
    create?: Array<WorkshopCreateWithoutJobCategoriesInput>;

    @Field(() => [WorkshopCreateOrConnectWithoutJobCategoriesInput], {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutJobCategoriesInput)
    @ValidateNested()
    connectOrCreate?: Array<WorkshopCreateOrConnectWithoutJobCategoriesInput>;

    @Field(() => [WorkshopWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId' | 'email'>>;
}
