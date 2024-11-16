import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateWithoutJobWorkshopsInput } from './job-create-without-job-workshops.input';
import { Type } from 'class-transformer';
import { JobCreateOrConnectWithoutJobWorkshopsInput } from './job-create-or-connect-without-job-workshops.input';
import { JobUpsertWithoutJobWorkshopsInput } from './job-upsert-without-job-workshops.input';
import { Prisma } from '@prisma/client';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { JobUpdateToOneWithWhereWithoutJobWorkshopsInput } from './job-update-to-one-with-where-without-job-workshops.input';

@InputType()
export class JobUpdateOneRequiredWithoutJobWorkshopsNestedInput {

    @Field(() => JobCreateWithoutJobWorkshopsInput, {nullable:true})
    @Type(() => JobCreateWithoutJobWorkshopsInput)
    create?: JobCreateWithoutJobWorkshopsInput;

    @Field(() => JobCreateOrConnectWithoutJobWorkshopsInput, {nullable:true})
    @Type(() => JobCreateOrConnectWithoutJobWorkshopsInput)
    connectOrCreate?: JobCreateOrConnectWithoutJobWorkshopsInput;

    @Field(() => JobUpsertWithoutJobWorkshopsInput, {nullable:true})
    @Type(() => JobUpsertWithoutJobWorkshopsInput)
    upsert?: JobUpsertWithoutJobWorkshopsInput;

    @Field(() => JobWhereUniqueInput, {nullable:true})
    @Type(() => JobWhereUniqueInput)
    connect?: Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>;

    @Field(() => JobUpdateToOneWithWhereWithoutJobWorkshopsInput, {nullable:true})
    @Type(() => JobUpdateToOneWithWhereWithoutJobWorkshopsInput)
    update?: JobUpdateToOneWithWhereWithoutJobWorkshopsInput;
}