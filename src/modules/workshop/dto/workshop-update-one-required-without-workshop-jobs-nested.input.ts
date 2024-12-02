import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutWorkshopJobsInput } from './workshop-create-without-workshop-jobs.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopCreateOrConnectWithoutWorkshopJobsInput } from './workshop-create-or-connect-without-workshop-jobs.input';
import { WorkshopUpsertWithoutWorkshopJobsInput } from './workshop-upsert-without-workshop-jobs.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { WorkshopUpdateToOneWithWhereWithoutWorkshopJobsInput } from './workshop-update-to-one-with-where-without-workshop-jobs.input';

@InputType()
export class WorkshopUpdateOneRequiredWithoutWorkshopJobsNestedInput {

    @Field(() => WorkshopCreateWithoutWorkshopJobsInput, {nullable:true})
    @Type(() => WorkshopCreateWithoutWorkshopJobsInput)
    @ValidateNested()
    create?: WorkshopCreateWithoutWorkshopJobsInput;

    @Field(() => WorkshopCreateOrConnectWithoutWorkshopJobsInput, {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutWorkshopJobsInput)
    @ValidateNested()
    connectOrCreate?: WorkshopCreateOrConnectWithoutWorkshopJobsInput;

    @Field(() => WorkshopUpsertWithoutWorkshopJobsInput, {nullable:true})
    @Type(() => WorkshopUpsertWithoutWorkshopJobsInput)
    @ValidateNested()
    upsert?: WorkshopUpsertWithoutWorkshopJobsInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId' | 'email'>;

    @Field(() => WorkshopUpdateToOneWithWhereWithoutWorkshopJobsInput, {nullable:true})
    @Type(() => WorkshopUpdateToOneWithWhereWithoutWorkshopJobsInput)
    @ValidateNested()
    update?: WorkshopUpdateToOneWithWhereWithoutWorkshopJobsInput;
}
