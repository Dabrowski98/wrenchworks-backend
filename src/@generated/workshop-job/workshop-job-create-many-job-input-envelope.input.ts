import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopJobCreateManyJobInput } from './workshop-job-create-many-job.input';
import { Type } from 'class-transformer';

@InputType()
export class WorkshopJobCreateManyJobInputEnvelope {

    @Field(() => [WorkshopJobCreateManyJobInput], {nullable:false})
    @Type(() => WorkshopJobCreateManyJobInput)
    data!: Array<WorkshopJobCreateManyJobInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
