import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopJobCreateWithoutWorkshopInput } from './workshop-job-create-without-workshop.input';
import { Type } from 'class-transformer';
import { WorkshopJobCreateOrConnectWithoutWorkshopInput } from './workshop-job-create-or-connect-without-workshop.input';
import { WorkshopJobUpsertWithWhereUniqueWithoutWorkshopInput } from './workshop-job-upsert-with-where-unique-without-workshop.input';
import { WorkshopJobCreateManyWorkshopInputEnvelope } from './workshop-job-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { WorkshopJobWhereUniqueInput } from './workshop-job-where-unique.input';
import { WorkshopJobUpdateWithWhereUniqueWithoutWorkshopInput } from './workshop-job-update-with-where-unique-without-workshop.input';
import { WorkshopJobUpdateManyWithWhereWithoutWorkshopInput } from './workshop-job-update-many-with-where-without-workshop.input';
import { WorkshopJobScalarWhereInput } from './workshop-job-scalar-where.input';

@InputType()
export class WorkshopJobUpdateManyWithoutWorkshopNestedInput {

    @Field(() => [WorkshopJobCreateWithoutWorkshopInput], {nullable:true})
    @Type(() => WorkshopJobCreateWithoutWorkshopInput)
    create?: Array<WorkshopJobCreateWithoutWorkshopInput>;

    @Field(() => [WorkshopJobCreateOrConnectWithoutWorkshopInput], {nullable:true})
    @Type(() => WorkshopJobCreateOrConnectWithoutWorkshopInput)
    connectOrCreate?: Array<WorkshopJobCreateOrConnectWithoutWorkshopInput>;

    @Field(() => [WorkshopJobUpsertWithWhereUniqueWithoutWorkshopInput], {nullable:true})
    @Type(() => WorkshopJobUpsertWithWhereUniqueWithoutWorkshopInput)
    upsert?: Array<WorkshopJobUpsertWithWhereUniqueWithoutWorkshopInput>;

    @Field(() => WorkshopJobCreateManyWorkshopInputEnvelope, {nullable:true})
    @Type(() => WorkshopJobCreateManyWorkshopInputEnvelope)
    createMany?: WorkshopJobCreateManyWorkshopInputEnvelope;

    @Field(() => [WorkshopJobWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopJobWhereUniqueInput)
    set?: Array<Prisma.AtLeast<WorkshopJobWhereUniqueInput, 'workshopJobId' | 'workshopId_jobId'>>;

    @Field(() => [WorkshopJobWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopJobWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<WorkshopJobWhereUniqueInput, 'workshopJobId' | 'workshopId_jobId'>>;

    @Field(() => [WorkshopJobWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopJobWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<WorkshopJobWhereUniqueInput, 'workshopJobId' | 'workshopId_jobId'>>;

    @Field(() => [WorkshopJobWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopJobWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<WorkshopJobWhereUniqueInput, 'workshopJobId' | 'workshopId_jobId'>>;

    @Field(() => [WorkshopJobUpdateWithWhereUniqueWithoutWorkshopInput], {nullable:true})
    @Type(() => WorkshopJobUpdateWithWhereUniqueWithoutWorkshopInput)
    update?: Array<WorkshopJobUpdateWithWhereUniqueWithoutWorkshopInput>;

    @Field(() => [WorkshopJobUpdateManyWithWhereWithoutWorkshopInput], {nullable:true})
    @Type(() => WorkshopJobUpdateManyWithWhereWithoutWorkshopInput)
    updateMany?: Array<WorkshopJobUpdateManyWithWhereWithoutWorkshopInput>;

    @Field(() => [WorkshopJobScalarWhereInput], {nullable:true})
    @Type(() => WorkshopJobScalarWhereInput)
    deleteMany?: Array<WorkshopJobScalarWhereInput>;
}
