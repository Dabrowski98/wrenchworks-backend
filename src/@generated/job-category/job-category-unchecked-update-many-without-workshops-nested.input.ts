import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCategoryCreateWithoutWorkshopsInput } from './job-category-create-without-workshops.input';
import { Type } from 'class-transformer';
import { JobCategoryCreateOrConnectWithoutWorkshopsInput } from './job-category-create-or-connect-without-workshops.input';
import { JobCategoryUpsertWithWhereUniqueWithoutWorkshopsInput } from './job-category-upsert-with-where-unique-without-workshops.input';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';
import { JobCategoryUpdateWithWhereUniqueWithoutWorkshopsInput } from './job-category-update-with-where-unique-without-workshops.input';
import { JobCategoryUpdateManyWithWhereWithoutWorkshopsInput } from './job-category-update-many-with-where-without-workshops.input';
import { JobCategoryScalarWhereInput } from './job-category-scalar-where.input';

@InputType()
export class JobCategoryUncheckedUpdateManyWithoutWorkshopsNestedInput {

    @Field(() => [JobCategoryCreateWithoutWorkshopsInput], {nullable:true})
    @Type(() => JobCategoryCreateWithoutWorkshopsInput)
    create?: Array<JobCategoryCreateWithoutWorkshopsInput>;

    @Field(() => [JobCategoryCreateOrConnectWithoutWorkshopsInput], {nullable:true})
    @Type(() => JobCategoryCreateOrConnectWithoutWorkshopsInput)
    connectOrCreate?: Array<JobCategoryCreateOrConnectWithoutWorkshopsInput>;

    @Field(() => [JobCategoryUpsertWithWhereUniqueWithoutWorkshopsInput], {nullable:true})
    @Type(() => JobCategoryUpsertWithWhereUniqueWithoutWorkshopsInput)
    upsert?: Array<JobCategoryUpsertWithWhereUniqueWithoutWorkshopsInput>;

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

    @Field(() => [JobCategoryUpdateWithWhereUniqueWithoutWorkshopsInput], {nullable:true})
    @Type(() => JobCategoryUpdateWithWhereUniqueWithoutWorkshopsInput)
    update?: Array<JobCategoryUpdateWithWhereUniqueWithoutWorkshopsInput>;

    @Field(() => [JobCategoryUpdateManyWithWhereWithoutWorkshopsInput], {nullable:true})
    @Type(() => JobCategoryUpdateManyWithWhereWithoutWorkshopsInput)
    updateMany?: Array<JobCategoryUpdateManyWithWhereWithoutWorkshopsInput>;

    @Field(() => [JobCategoryScalarWhereInput], {nullable:true})
    @Type(() => JobCategoryScalarWhereInput)
    deleteMany?: Array<JobCategoryScalarWhereInput>;
}
