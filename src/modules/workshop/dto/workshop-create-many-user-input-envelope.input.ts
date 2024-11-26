import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateManyUserInput } from './workshop-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class WorkshopCreateManyUserInputEnvelope {

    @Field(() => [WorkshopCreateManyUserInput], {nullable:false})
    @Type(() => WorkshopCreateManyUserInput)
    data!: Array<WorkshopCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
