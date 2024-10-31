import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestJobCreateManyServiceRequestInput } from './service-request-job-create-many-service-request.input';
import { Type } from 'class-transformer';

@InputType()
export class ServiceRequestJobCreateManyServiceRequestInputEnvelope {

    @Field(() => [ServiceRequestJobCreateManyServiceRequestInput], {nullable:false})
    @Type(() => ServiceRequestJobCreateManyServiceRequestInput)
    data!: Array<ServiceRequestJobCreateManyServiceRequestInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
