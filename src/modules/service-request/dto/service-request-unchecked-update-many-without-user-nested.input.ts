import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestCreateWithoutUserInput } from './service-request-create-without-user.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceRequestCreateOrConnectWithoutUserInput } from './service-request-create-or-connect-without-user.input';
import { ServiceRequestUpsertWithWhereUniqueWithoutUserInput } from './service-request-upsert-with-where-unique-without-user.input';
import { ServiceRequestCreateManyUserInputEnvelope } from './service-request-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';
import { ServiceRequestUpdateWithWhereUniqueWithoutUserInput } from './service-request-update-with-where-unique-without-user.input';
import { ServiceRequestUpdateManyWithWhereWithoutUserInput } from './service-request-update-many-with-where-without-user.input';
import { ServiceRequestScalarWhereInput } from './service-request-scalar-where.input';

@InputType()
export class ServiceRequestUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [ServiceRequestCreateWithoutUserInput], {nullable:true})
    @Type(() => ServiceRequestCreateWithoutUserInput)
    @ValidateNested()
    create?: Array<ServiceRequestCreateWithoutUserInput>;

    @Field(() => [ServiceRequestCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ServiceRequestCreateOrConnectWithoutUserInput)
    @ValidateNested()
    connectOrCreate?: Array<ServiceRequestCreateOrConnectWithoutUserInput>;

    @Field(() => [ServiceRequestUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ServiceRequestUpsertWithWhereUniqueWithoutUserInput)
    @ValidateNested()
    upsert?: Array<ServiceRequestUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ServiceRequestCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ServiceRequestCreateManyUserInputEnvelope)
    @ValidateNested()
    createMany?: ServiceRequestCreateManyUserInputEnvelope;

    @Field(() => [ServiceRequestWhereUniqueInput], {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    @ValidateNested()
    set?: Array<Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'guestId' | 'approvedServiceId'>>;

    @Field(() => [ServiceRequestWhereUniqueInput], {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    @ValidateNested()
    disconnect?: Array<Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'guestId' | 'approvedServiceId'>>;

    @Field(() => [ServiceRequestWhereUniqueInput], {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    @ValidateNested()
    delete?: Array<Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'guestId' | 'approvedServiceId'>>;

    @Field(() => [ServiceRequestWhereUniqueInput], {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'guestId' | 'approvedServiceId'>>;

    @Field(() => [ServiceRequestUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ServiceRequestUpdateWithWhereUniqueWithoutUserInput)
    @ValidateNested()
    update?: Array<ServiceRequestUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ServiceRequestUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ServiceRequestUpdateManyWithWhereWithoutUserInput)
    @ValidateNested()
    updateMany?: Array<ServiceRequestUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ServiceRequestScalarWhereInput], {nullable:true})
    @Type(() => ServiceRequestScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<ServiceRequestScalarWhereInput>;
}
