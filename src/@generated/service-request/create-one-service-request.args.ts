import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceRequestCreateInput } from './service-request-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneServiceRequestArgs {

    @Field(() => ServiceRequestCreateInput, {nullable:false})
    @Type(() => ServiceRequestCreateInput)
    data!: ServiceRequestCreateInput;
}
