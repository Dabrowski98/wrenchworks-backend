import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobCreateManyInput } from './job-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyJobArgs {

    @Field(() => [JobCreateManyInput], {nullable:false})
    @Type(() => JobCreateManyInput)
    data!: Array<JobCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
