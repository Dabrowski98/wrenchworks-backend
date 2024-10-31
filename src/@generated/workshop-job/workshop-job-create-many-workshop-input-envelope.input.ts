import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopJobCreateManyWorkshopInput } from './workshop-job-create-many-workshop.input';
import { Type } from 'class-transformer';

@InputType()
export class WorkshopJobCreateManyWorkshopInputEnvelope {

    @Field(() => [WorkshopJobCreateManyWorkshopInput], {nullable:false})
    @Type(() => WorkshopJobCreateManyWorkshopInput)
    data!: Array<WorkshopJobCreateManyWorkshopInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
