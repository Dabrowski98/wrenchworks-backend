import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobCreateManyInput } from './job-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManyJobArgs {

    @Field(() => [JobCreateManyInput], {nullable:false})
    @Type(() => JobCreateManyInput)
    @ValidateNested()
    data!: Array<JobCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
