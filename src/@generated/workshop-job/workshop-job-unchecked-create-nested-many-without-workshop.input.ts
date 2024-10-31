import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopJobCreateWithoutWorkshopInput } from './workshop-job-create-without-workshop.input';
import { Type } from 'class-transformer';
import { WorkshopJobCreateOrConnectWithoutWorkshopInput } from './workshop-job-create-or-connect-without-workshop.input';
import { WorkshopJobCreateManyWorkshopInputEnvelope } from './workshop-job-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { WorkshopJobWhereUniqueInput } from './workshop-job-where-unique.input';

@InputType()
export class WorkshopJobUncheckedCreateNestedManyWithoutWorkshopInput {

    @Field(() => [WorkshopJobCreateWithoutWorkshopInput], {nullable:true})
    @Type(() => WorkshopJobCreateWithoutWorkshopInput)
    create?: Array<WorkshopJobCreateWithoutWorkshopInput>;

    @Field(() => [WorkshopJobCreateOrConnectWithoutWorkshopInput], {nullable:true})
    @Type(() => WorkshopJobCreateOrConnectWithoutWorkshopInput)
    connectOrCreate?: Array<WorkshopJobCreateOrConnectWithoutWorkshopInput>;

    @Field(() => WorkshopJobCreateManyWorkshopInputEnvelope, {nullable:true})
    @Type(() => WorkshopJobCreateManyWorkshopInputEnvelope)
    createMany?: WorkshopJobCreateManyWorkshopInputEnvelope;

    @Field(() => [WorkshopJobWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopJobWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<WorkshopJobWhereUniqueInput, 'workshopJobId' | 'workshopId_jobId'>>;
}
