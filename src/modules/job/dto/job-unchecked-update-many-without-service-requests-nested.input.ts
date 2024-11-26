import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateWithoutServiceRequestsInput } from './job-create-without-service-requests.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
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
    @ValidateNested()
    create?: Array<JobCreateWithoutServiceRequestsInput>;

    @Field(() => [JobCreateOrConnectWithoutServiceRequestsInput], {nullable:true})
    @Type(() => JobCreateOrConnectWithoutServiceRequestsInput)
    @ValidateNested()
    connectOrCreate?: Array<JobCreateOrConnectWithoutServiceRequestsInput>;

    @Field(() => [JobUpsertWithWhereUniqueWithoutServiceRequestsInput], {nullable:true})
    @Type(() => JobUpsertWithWhereUniqueWithoutServiceRequestsInput)
    @ValidateNested()
    upsert?: Array<JobUpsertWithWhereUniqueWithoutServiceRequestsInput>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    @Type(() => JobWhereUniqueInput)
    @ValidateNested()
    set?: Array<Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    @Type(() => JobWhereUniqueInput)
    @ValidateNested()
    disconnect?: Array<Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    @Type(() => JobWhereUniqueInput)
    @ValidateNested()
    delete?: Array<Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    @Type(() => JobWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>>;

    @Field(() => [JobUpdateWithWhereUniqueWithoutServiceRequestsInput], {nullable:true})
    @Type(() => JobUpdateWithWhereUniqueWithoutServiceRequestsInput)
    @ValidateNested()
    update?: Array<JobUpdateWithWhereUniqueWithoutServiceRequestsInput>;

    @Field(() => [JobUpdateManyWithWhereWithoutServiceRequestsInput], {nullable:true})
    @Type(() => JobUpdateManyWithWhereWithoutServiceRequestsInput)
    @ValidateNested()
    updateMany?: Array<JobUpdateManyWithWhereWithoutServiceRequestsInput>;

    @Field(() => [JobScalarWhereInput], {nullable:true})
    @Type(() => JobScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<JobScalarWhereInput>;
}
