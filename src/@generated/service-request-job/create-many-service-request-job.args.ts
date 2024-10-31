import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceRequestJobCreateManyInput } from './service-request-job-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyServiceRequestJobArgs {

    @Field(() => [ServiceRequestJobCreateManyInput], {nullable:false})
    @Type(() => ServiceRequestJobCreateManyInput)
    data!: Array<ServiceRequestJobCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
