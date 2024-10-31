import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceRequestJobCreateInput } from './service-request-job-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneServiceRequestJobArgs {

    @Field(() => ServiceRequestJobCreateInput, {nullable:false})
    @Type(() => ServiceRequestJobCreateInput)
    data!: ServiceRequestJobCreateInput;
}
