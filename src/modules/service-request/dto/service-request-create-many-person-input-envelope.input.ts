import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestCreateManyPersonInput } from './service-request-create-many-person.input';
import { Type } from 'class-transformer';
import { ServiceRequestCreateInput } from './service-request-create.input';
import * as Validator from 'class-validator';
import { ServiceRequestCreateWithoutPersonInput } from './service-request-create-without-person.input';

@InputType()
export class ServiceRequestCreateManyPersonInputEnvelope {

    @Field(() => [ServiceRequestCreateManyPersonInput], {nullable:false})
    @Type(() => ServiceRequestCreateManyPersonInput)
    @Validator.ValidateNested()
    data!: ServiceRequestCreateManyPersonInput[];

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
