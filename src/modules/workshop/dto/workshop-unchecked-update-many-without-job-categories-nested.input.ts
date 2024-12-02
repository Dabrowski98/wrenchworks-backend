import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutJobCategoriesInput } from './workshop-create-without-job-categories.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopCreateOrConnectWithoutJobCategoriesInput } from './workshop-create-or-connect-without-job-categories.input';
import { WorkshopUpsertWithWhereUniqueWithoutJobCategoriesInput } from './workshop-upsert-with-where-unique-without-job-categories.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { WorkshopUpdateWithWhereUniqueWithoutJobCategoriesInput } from './workshop-update-with-where-unique-without-job-categories.input';
import { WorkshopUpdateManyWithWhereWithoutJobCategoriesInput } from './workshop-update-many-with-where-without-job-categories.input';
import { WorkshopScalarWhereInput } from './workshop-scalar-where.input';

@InputType()
export class WorkshopUncheckedUpdateManyWithoutJobCategoriesNestedInput {

    @Field(() => [WorkshopCreateWithoutJobCategoriesInput], {nullable:true})
    @Type(() => WorkshopCreateWithoutJobCategoriesInput)
    @ValidateNested()
    create?: Array<WorkshopCreateWithoutJobCategoriesInput>;

    @Field(() => [WorkshopCreateOrConnectWithoutJobCategoriesInput], {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutJobCategoriesInput)
    @ValidateNested()
    connectOrCreate?: Array<WorkshopCreateOrConnectWithoutJobCategoriesInput>;

    @Field(() => [WorkshopUpsertWithWhereUniqueWithoutJobCategoriesInput], {nullable:true})
    @Type(() => WorkshopUpsertWithWhereUniqueWithoutJobCategoriesInput)
    @ValidateNested()
    upsert?: Array<WorkshopUpsertWithWhereUniqueWithoutJobCategoriesInput>;

    @Field(() => [WorkshopWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    set?: Array<Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId' | 'email'>>;

    @Field(() => [WorkshopWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    disconnect?: Array<Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId' | 'email'>>;

    @Field(() => [WorkshopWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    delete?: Array<Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId' | 'email'>>;

    @Field(() => [WorkshopWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId' | 'email'>>;

    @Field(() => [WorkshopUpdateWithWhereUniqueWithoutJobCategoriesInput], {nullable:true})
    @Type(() => WorkshopUpdateWithWhereUniqueWithoutJobCategoriesInput)
    @ValidateNested()
    update?: Array<WorkshopUpdateWithWhereUniqueWithoutJobCategoriesInput>;

    @Field(() => [WorkshopUpdateManyWithWhereWithoutJobCategoriesInput], {nullable:true})
    @Type(() => WorkshopUpdateManyWithWhereWithoutJobCategoriesInput)
    @ValidateNested()
    updateMany?: Array<WorkshopUpdateManyWithWhereWithoutJobCategoriesInput>;

    @Field(() => [WorkshopScalarWhereInput], {nullable:true})
    @Type(() => WorkshopScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<WorkshopScalarWhereInput>;
}
