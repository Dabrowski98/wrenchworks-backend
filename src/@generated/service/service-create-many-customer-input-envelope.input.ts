import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateManyCustomerInput } from './service-create-many-customer.input';
import { Type } from 'class-transformer';

@InputType()
export class ServiceCreateManyCustomerInputEnvelope {

    @Field(() => [ServiceCreateManyCustomerInput], {nullable:false})
    @Type(() => ServiceCreateManyCustomerInput)
    data!: Array<ServiceCreateManyCustomerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
