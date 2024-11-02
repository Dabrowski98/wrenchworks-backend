import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestCreateWithoutJobsInput } from './service-request-create-without-jobs.input';
import { Type } from 'class-transformer';
import { ServiceRequestCreateOrConnectWithoutJobsInput } from './service-request-create-or-connect-without-jobs.input';
import { ServiceRequestUpsertWithWhereUniqueWithoutJobsInput } from './service-request-upsert-with-where-unique-without-jobs.input';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';
import { ServiceRequestUpdateWithWhereUniqueWithoutJobsInput } from './service-request-update-with-where-unique-without-jobs.input';
import { ServiceRequestUpdateManyWithWhereWithoutJobsInput } from './service-request-update-many-with-where-without-jobs.input';
import { ServiceRequestScalarWhereInput } from './service-request-scalar-where.input';

@InputType()
export class ServiceRequestUncheckedUpdateManyWithoutJobsNestedInput {

    @Field(() => [ServiceRequestCreateWithoutJobsInput], {nullable:true})
    @Type(() => ServiceRequestCreateWithoutJobsInput)
    create?: Array<ServiceRequestCreateWithoutJobsInput>;

    @Field(() => [ServiceRequestCreateOrConnectWithoutJobsInput], {nullable:true})
    @Type(() => ServiceRequestCreateOrConnectWithoutJobsInput)
    connectOrCreate?: Array<ServiceRequestCreateOrConnectWithoutJobsInput>;

    @Field(() => [ServiceRequestUpsertWithWhereUniqueWithoutJobsInput], {nullable:true})
    @Type(() => ServiceRequestUpsertWithWhereUniqueWithoutJobsInput)
    upsert?: Array<ServiceRequestUpsertWithWhereUniqueWithoutJobsInput>;

    @Field(() => [ServiceRequestWhereUniqueInput], {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>>;

    @Field(() => [ServiceRequestWhereUniqueInput], {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>>;

    @Field(() => [ServiceRequestWhereUniqueInput], {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>>;

    @Field(() => [ServiceRequestWhereUniqueInput], {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>>;

    @Field(() => [ServiceRequestUpdateWithWhereUniqueWithoutJobsInput], {nullable:true})
    @Type(() => ServiceRequestUpdateWithWhereUniqueWithoutJobsInput)
    update?: Array<ServiceRequestUpdateWithWhereUniqueWithoutJobsInput>;

    @Field(() => [ServiceRequestUpdateManyWithWhereWithoutJobsInput], {nullable:true})
    @Type(() => ServiceRequestUpdateManyWithWhereWithoutJobsInput)
    updateMany?: Array<ServiceRequestUpdateManyWithWhereWithoutJobsInput>;

    @Field(() => [ServiceRequestScalarWhereInput], {nullable:true})
    @Type(() => ServiceRequestScalarWhereInput)
    deleteMany?: Array<ServiceRequestScalarWhereInput>;
}
