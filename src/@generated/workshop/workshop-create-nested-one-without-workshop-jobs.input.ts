import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutWorkshopJobsInput } from './workshop-create-without-workshop-jobs.input';
import { Type } from 'class-transformer';
import { WorkshopCreateOrConnectWithoutWorkshopJobsInput } from './workshop-create-or-connect-without-workshop-jobs.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';

@InputType()
export class WorkshopCreateNestedOneWithoutWorkshopJobsInput {

    @Field(() => WorkshopCreateWithoutWorkshopJobsInput, {nullable:true})
    @Type(() => WorkshopCreateWithoutWorkshopJobsInput)
    create?: WorkshopCreateWithoutWorkshopJobsInput;

    @Field(() => WorkshopCreateOrConnectWithoutWorkshopJobsInput, {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutWorkshopJobsInput)
    connectOrCreate?: WorkshopCreateOrConnectWithoutWorkshopJobsInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;
}
