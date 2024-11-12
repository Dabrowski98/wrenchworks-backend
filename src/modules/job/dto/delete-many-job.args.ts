import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobWhereInput } from './job-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyJobArgs {

    @Field(() => JobWhereInput, {nullable:true})
    @Type(() => JobWhereInput)
    where?: JobWhereInput;
}
