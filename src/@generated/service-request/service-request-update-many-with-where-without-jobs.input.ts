import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestScalarWhereInput } from './service-request-scalar-where.input';
import { Type } from 'class-transformer';
import { ServiceRequestUpdateManyMutationInput } from './service-request-update-many-mutation.input';

@InputType()
export class ServiceRequestUpdateManyWithWhereWithoutJobsInput {

    @Field(() => ServiceRequestScalarWhereInput, {nullable:false})
    @Type(() => ServiceRequestScalarWhereInput)
    where!: ServiceRequestScalarWhereInput;

    @Field(() => ServiceRequestUpdateManyMutationInput, {nullable:false})
    @Type(() => ServiceRequestUpdateManyMutationInput)
    data!: ServiceRequestUpdateManyMutationInput;
}
