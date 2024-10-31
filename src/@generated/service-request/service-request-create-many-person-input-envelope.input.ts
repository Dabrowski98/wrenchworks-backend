import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestCreateManyPersonInput } from './service-request-create-many-person.input';
import { Type } from 'class-transformer';

@InputType()
export class ServiceRequestCreateManyPersonInputEnvelope {

    @Field(() => [ServiceRequestCreateManyPersonInput], {nullable:false})
    @Type(() => ServiceRequestCreateManyPersonInput)
    data!: Array<ServiceRequestCreateManyPersonInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
