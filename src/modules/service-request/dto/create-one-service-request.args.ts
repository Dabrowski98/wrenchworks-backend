import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceRequestCreateInput } from './service-request-create.input';
import { Type } from 'class-transformer';
import * as Validator from 'class-validator';

@ArgsType()
export class CreateOneServiceRequestArgs {

    @Field(() => ServiceRequestCreateInput, {nullable:false})
    @Type(() => ServiceRequestCreateInput)
    @Validator.ValidateNested()
    data!: ServiceRequestCreateInput;
}
