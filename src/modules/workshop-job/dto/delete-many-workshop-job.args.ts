import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopJobWhereInput } from './workshop-job-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyWorkshopJobArgs {

    @Field(() => WorkshopJobWhereInput, {nullable:true})
    @Type(() => WorkshopJobWhereInput)
    where?: WorkshopJobWhereInput;
}
