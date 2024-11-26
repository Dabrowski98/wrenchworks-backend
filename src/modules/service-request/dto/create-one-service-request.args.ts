import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceRequestCreateInput } from './service-request-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneServiceRequestArgs {

    @Field(() => ServiceRequestCreateInput, {nullable:false})
    @Type(() => ServiceRequestCreateInput)
    @ValidateNested()
    data!: ServiceRequestCreateInput;
}
