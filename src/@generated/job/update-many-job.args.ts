import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobUpdateManyMutationInput } from './job-update-many-mutation.input';
import { Type } from 'class-transformer';
import { JobWhereInput } from './job-where.input';

@ArgsType()
export class UpdateManyJobArgs {

    @Field(() => JobUpdateManyMutationInput, {nullable:false})
    @Type(() => JobUpdateManyMutationInput)
    data!: JobUpdateManyMutationInput;

    @Field(() => JobWhereInput, {nullable:true})
    @Type(() => JobWhereInput)
    where?: JobWhereInput;
}
