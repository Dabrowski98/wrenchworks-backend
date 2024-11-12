import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateWithoutServiceRequestsInput } from './job-create-without-service-requests.input';
import { Type } from 'class-transformer';
import { JobCreateOrConnectWithoutServiceRequestsInput } from './job-create-or-connect-without-service-requests.input';
import { JobUpsertWithWhereUniqueWithoutServiceRequestsInput } from './job-upsert-with-where-unique-without-service-requests.input';
import { Prisma } from '@prisma/client';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { JobUpdateWithWhereUniqueWithoutServiceRequestsInput } from './job-update-with-where-unique-without-service-requests.input';
import { JobUpdateManyWithWhereWithoutServiceRequestsInput } from './job-update-many-with-where-without-service-requests.input';
import { JobScalarWhereInput } from './job-scalar-where.input';

@InputType()
export class JobUncheckedUpdateManyWithoutServiceRequestsNestedInput {

    @Field(() => [JobCreateWithoutServiceRequestsInput], {nullable:true})
    @Type(() => JobCreateWithoutServiceRequestsInput)
    create?: Array<JobCreateWithoutServiceRequestsInput>;

    @Field(() => [JobCreateOrConnectWithoutServiceRequestsInput], {nullable:true})
    @Type(() => JobCreateOrConnectWithoutServiceRequestsInput)
    connectOrCreate?: Array<JobCreateOrConnectWithoutServiceRequestsInput>;

    @Field(() => [JobUpsertWithWhereUniqueWithoutServiceRequestsInput], {nullable:true})
    @Type(() => JobUpsertWithWhereUniqueWithoutServiceRequestsInput)
    upsert?: Array<JobUpsertWithWhereUniqueWithoutServiceRequestsInput>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    @Type(() => JobWhereUniqueInput)
    set?: Array<Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    @Type(() => JobWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    @Type(() => JobWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    @Type(() => JobWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>>;

    @Field(() => [JobUpdateWithWhereUniqueWithoutServiceRequestsInput], {nullable:true})
    @Type(() => JobUpdateWithWhereUniqueWithoutServiceRequestsInput)
    update?: Array<JobUpdateWithWhereUniqueWithoutServiceRequestsInput>;

    @Field(() => [JobUpdateManyWithWhereWithoutServiceRequestsInput], {nullable:true})
    @Type(() => JobUpdateManyWithWhereWithoutServiceRequestsInput)
    updateMany?: Array<JobUpdateManyWithWhereWithoutServiceRequestsInput>;

    @Field(() => [JobScalarWhereInput], {nullable:true})
    @Type(() => JobScalarWhereInput)
    deleteMany?: Array<JobScalarWhereInput>;
}
