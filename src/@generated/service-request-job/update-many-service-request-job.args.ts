import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceRequestJobUpdateManyMutationInput } from './service-request-job-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ServiceRequestJobWhereInput } from './service-request-job-where.input';

@ArgsType()
export class UpdateManyServiceRequestJobArgs {

    @Field(() => ServiceRequestJobUpdateManyMutationInput, {nullable:false})
    @Type(() => ServiceRequestJobUpdateManyMutationInput)
    data!: ServiceRequestJobUpdateManyMutationInput;

    @Field(() => ServiceRequestJobWhereInput, {nullable:true})
    @Type(() => ServiceRequestJobWhereInput)
    where?: ServiceRequestJobWhereInput;
}
