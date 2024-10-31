import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateWithoutJobWorkshopsInput } from './job-create-without-job-workshops.input';
import { Type } from 'class-transformer';
import { JobCreateOrConnectWithoutJobWorkshopsInput } from './job-create-or-connect-without-job-workshops.input';
import { Prisma } from '@prisma/client';
import { JobWhereUniqueInput } from './job-where-unique.input';

@InputType()
export class JobCreateNestedOneWithoutJobWorkshopsInput {

    @Field(() => JobCreateWithoutJobWorkshopsInput, {nullable:true})
    @Type(() => JobCreateWithoutJobWorkshopsInput)
    create?: JobCreateWithoutJobWorkshopsInput;

    @Field(() => JobCreateOrConnectWithoutJobWorkshopsInput, {nullable:true})
    @Type(() => JobCreateOrConnectWithoutJobWorkshopsInput)
    connectOrCreate?: JobCreateOrConnectWithoutJobWorkshopsInput;

    @Field(() => JobWhereUniqueInput, {nullable:true})
    @Type(() => JobWhereUniqueInput)
    connect?: Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>;
}
