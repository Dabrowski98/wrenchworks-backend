import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobCreateInput } from './job-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneJobArgs {

    @Field(() => JobCreateInput, {nullable:false})
    @Type(() => JobCreateInput)
    @ValidateNested()
    data!: JobCreateInput;
}
