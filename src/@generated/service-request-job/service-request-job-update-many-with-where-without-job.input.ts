import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestJobScalarWhereInput } from './service-request-job-scalar-where.input';
import { Type } from 'class-transformer';
import { ServiceRequestJobUpdateManyMutationInput } from './service-request-job-update-many-mutation.input';

@InputType()
export class ServiceRequestJobUpdateManyWithWhereWithoutJobInput {

    @Field(() => ServiceRequestJobScalarWhereInput, {nullable:false})
    @Type(() => ServiceRequestJobScalarWhereInput)
    where!: ServiceRequestJobScalarWhereInput;

    @Field(() => ServiceRequestJobUpdateManyMutationInput, {nullable:false})
    @Type(() => ServiceRequestJobUpdateManyMutationInput)
    data!: ServiceRequestJobUpdateManyMutationInput;
}
