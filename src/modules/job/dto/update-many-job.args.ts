import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobUpdateManyMutationInput } from './job-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { JobWhereInput } from './job-where.input';

@ArgsType()
export class UpdateManyJobArgs {

    @Field(() => JobUpdateManyMutationInput, {nullable:false})
    @Type(() => JobUpdateManyMutationInput)
    @ValidateNested()
    data!: JobUpdateManyMutationInput;

    @Field(() => JobWhereInput, {nullable:true})
    @Type(() => JobWhereInput)
    where?: JobWhereInput;
}
