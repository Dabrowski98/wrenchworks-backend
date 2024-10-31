import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestJobCreateManyJobInput } from './service-request-job-create-many-job.input';
import { Type } from 'class-transformer';

@InputType()
export class ServiceRequestJobCreateManyJobInputEnvelope {

    @Field(() => [ServiceRequestJobCreateManyJobInput], {nullable:false})
    @Type(() => ServiceRequestJobCreateManyJobInput)
    data!: Array<ServiceRequestJobCreateManyJobInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
