import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestCreateManyUserInput } from './service-request-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ServiceRequestCreateManyUserInputEnvelope {

    @Field(() => [ServiceRequestCreateManyUserInput], {nullable:false})
    @Type(() => ServiceRequestCreateManyUserInput)
    data!: Array<ServiceRequestCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
