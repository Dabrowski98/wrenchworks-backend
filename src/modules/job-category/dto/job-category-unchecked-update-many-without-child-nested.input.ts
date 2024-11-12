import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCategoryCreateWithoutChildInput } from './job-category-create-without-child.input';
import { Type } from 'class-transformer';
import { JobCategoryCreateOrConnectWithoutChildInput } from './job-category-create-or-connect-without-child.input';
import { JobCategoryUpsertWithWhereUniqueWithoutChildInput } from './job-category-upsert-with-where-unique-without-child.input';
import { JobCategoryCreateManyChildInputEnvelope } from './job-category-create-many-child-input-envelope.input';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';
import { JobCategoryUpdateWithWhereUniqueWithoutChildInput } from './job-category-update-with-where-unique-without-child.input';
import { JobCategoryUpdateManyWithWhereWithoutChildInput } from './job-category-update-many-with-where-without-child.input';
import { JobCategoryScalarWhereInput } from './job-category-scalar-where.input';

@InputType()
export class JobCategoryUncheckedUpdateManyWithoutChildNestedInput {

    @Field(() => [JobCategoryCreateWithoutChildInput], {nullable:true})
    @Type(() => JobCategoryCreateWithoutChildInput)
    create?: Array<JobCategoryCreateWithoutChildInput>;

    @Field(() => [JobCategoryCreateOrConnectWithoutChildInput], {nullable:true})
    @Type(() => JobCategoryCreateOrConnectWithoutChildInput)
    connectOrCreate?: Array<JobCategoryCreateOrConnectWithoutChildInput>;

    @Field(() => [JobCategoryUpsertWithWhereUniqueWithoutChildInput], {nullable:true})
    @Type(() => JobCategoryUpsertWithWhereUniqueWithoutChildInput)
    upsert?: Array<JobCategoryUpsertWithWhereUniqueWithoutChildInput>;

    @Field(() => JobCategoryCreateManyChildInputEnvelope, {nullable:true})
    @Type(() => JobCategoryCreateManyChildInputEnvelope)
    createMany?: JobCategoryCreateManyChildInputEnvelope;

    @Field(() => [JobCategoryWhereUniqueInput], {nullable:true})
    @Type(() => JobCategoryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>>;

    @Field(() => [JobCategoryWhereUniqueInput], {nullable:true})
    @Type(() => JobCategoryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>>;

    @Field(() => [JobCategoryWhereUniqueInput], {nullable:true})
    @Type(() => JobCategoryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>>;

    @Field(() => [JobCategoryWhereUniqueInput], {nullable:true})
    @Type(() => JobCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>>;

    @Field(() => [JobCategoryUpdateWithWhereUniqueWithoutChildInput], {nullable:true})
    @Type(() => JobCategoryUpdateWithWhereUniqueWithoutChildInput)
    update?: Array<JobCategoryUpdateWithWhereUniqueWithoutChildInput>;

    @Field(() => [JobCategoryUpdateManyWithWhereWithoutChildInput], {nullable:true})
    @Type(() => JobCategoryUpdateManyWithWhereWithoutChildInput)
    updateMany?: Array<JobCategoryUpdateManyWithWhereWithoutChildInput>;

    @Field(() => [JobCategoryScalarWhereInput], {nullable:true})
    @Type(() => JobCategoryScalarWhereInput)
    deleteMany?: Array<JobCategoryScalarWhereInput>;
}
