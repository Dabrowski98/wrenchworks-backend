import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopUpdateWithoutWorkshopJobsInput } from './workshop-update-without-workshop-jobs.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopCreateWithoutWorkshopJobsInput } from './workshop-create-without-workshop-jobs.input';
import { WorkshopWhereInput } from './workshop-where.input';

@InputType()
export class WorkshopUpsertWithoutWorkshopJobsInput {

    @Field(() => WorkshopUpdateWithoutWorkshopJobsInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutWorkshopJobsInput)
    @ValidateNested()
    update!: WorkshopUpdateWithoutWorkshopJobsInput;

    @Field(() => WorkshopCreateWithoutWorkshopJobsInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutWorkshopJobsInput)
    @ValidateNested()
    create!: WorkshopCreateWithoutWorkshopJobsInput;

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;
}
