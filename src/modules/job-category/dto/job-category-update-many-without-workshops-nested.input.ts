import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCategoryCreateWithoutWorkshopsInput } from './job-category-create-without-workshops.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { JobCategoryCreateOrConnectWithoutWorkshopsInput } from './job-category-create-or-connect-without-workshops.input';
import { JobCategoryUpsertWithWhereUniqueWithoutWorkshopsInput } from './job-category-upsert-with-where-unique-without-workshops.input';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';
import { JobCategoryUpdateWithWhereUniqueWithoutWorkshopsInput } from './job-category-update-with-where-unique-without-workshops.input';
import { JobCategoryUpdateManyWithWhereWithoutWorkshopsInput } from './job-category-update-many-with-where-without-workshops.input';
import { JobCategoryScalarWhereInput } from './job-category-scalar-where.input';

@InputType()
export class JobCategoryUpdateManyWithoutWorkshopsNestedInput {

    @Field(() => [JobCategoryCreateWithoutWorkshopsInput], {nullable:true})
    @Type(() => JobCategoryCreateWithoutWorkshopsInput)
    @ValidateNested()
    create?: Array<JobCategoryCreateWithoutWorkshopsInput>;

    @Field(() => [JobCategoryCreateOrConnectWithoutWorkshopsInput], {nullable:true})
    @Type(() => JobCategoryCreateOrConnectWithoutWorkshopsInput)
    @ValidateNested()
    connectOrCreate?: Array<JobCategoryCreateOrConnectWithoutWorkshopsInput>;

    @Field(() => [JobCategoryUpsertWithWhereUniqueWithoutWorkshopsInput], {nullable:true})
    @Type(() => JobCategoryUpsertWithWhereUniqueWithoutWorkshopsInput)
    @ValidateNested()
    upsert?: Array<JobCategoryUpsertWithWhereUniqueWithoutWorkshopsInput>;

    @Field(() => [JobCategoryWhereUniqueInput], {nullable:true})
    @Type(() => JobCategoryWhereUniqueInput)
    @ValidateNested()
    set?: Array<Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>>;

    @Field(() => [JobCategoryWhereUniqueInput], {nullable:true})
    @Type(() => JobCategoryWhereUniqueInput)
    @ValidateNested()
    disconnect?: Array<Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>>;

    @Field(() => [JobCategoryWhereUniqueInput], {nullable:true})
    @Type(() => JobCategoryWhereUniqueInput)
    @ValidateNested()
    delete?: Array<Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>>;

    @Field(() => [JobCategoryWhereUniqueInput], {nullable:true})
    @Type(() => JobCategoryWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>>;

    @Field(() => [JobCategoryUpdateWithWhereUniqueWithoutWorkshopsInput], {nullable:true})
    @Type(() => JobCategoryUpdateWithWhereUniqueWithoutWorkshopsInput)
    @ValidateNested()
    update?: Array<JobCategoryUpdateWithWhereUniqueWithoutWorkshopsInput>;

    @Field(() => [JobCategoryUpdateManyWithWhereWithoutWorkshopsInput], {nullable:true})
    @Type(() => JobCategoryUpdateManyWithWhereWithoutWorkshopsInput)
    @ValidateNested()
    updateMany?: Array<JobCategoryUpdateManyWithWhereWithoutWorkshopsInput>;

    @Field(() => [JobCategoryScalarWhereInput], {nullable:true})
    @Type(() => JobCategoryScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<JobCategoryScalarWhereInput>;
}
