import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutWorkshopJobCategoriesInput } from './workshop-create-without-workshop-job-categories.input';
import { Type } from 'class-transformer';
import { WorkshopCreateOrConnectWithoutWorkshopJobCategoriesInput } from './workshop-create-or-connect-without-workshop-job-categories.input';
import { WorkshopUpsertWithoutWorkshopJobCategoriesInput } from './workshop-upsert-without-workshop-job-categories.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { WorkshopUpdateToOneWithWhereWithoutWorkshopJobCategoriesInput } from './workshop-update-to-one-with-where-without-workshop-job-categories.input';

@InputType()
export class WorkshopUpdateOneRequiredWithoutWorkshopJobCategoriesNestedInput {

    @Field(() => WorkshopCreateWithoutWorkshopJobCategoriesInput, {nullable:true})
    @Type(() => WorkshopCreateWithoutWorkshopJobCategoriesInput)
    create?: WorkshopCreateWithoutWorkshopJobCategoriesInput;

    @Field(() => WorkshopCreateOrConnectWithoutWorkshopJobCategoriesInput, {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutWorkshopJobCategoriesInput)
    connectOrCreate?: WorkshopCreateOrConnectWithoutWorkshopJobCategoriesInput;

    @Field(() => WorkshopUpsertWithoutWorkshopJobCategoriesInput, {nullable:true})
    @Type(() => WorkshopUpsertWithoutWorkshopJobCategoriesInput)
    upsert?: WorkshopUpsertWithoutWorkshopJobCategoriesInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;

    @Field(() => WorkshopUpdateToOneWithWhereWithoutWorkshopJobCategoriesInput, {nullable:true})
    @Type(() => WorkshopUpdateToOneWithWhereWithoutWorkshopJobCategoriesInput)
    update?: WorkshopUpdateToOneWithWhereWithoutWorkshopJobCategoriesInput;
}
