import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateManyPersonInput } from './customer-create-many-person.input';
import { Type } from 'class-transformer';

@InputType()
export class CustomerCreateManyPersonInputEnvelope {

    @Field(() => [CustomerCreateManyPersonInput], {nullable:false})
    @Type(() => CustomerCreateManyPersonInput)
    data!: Array<CustomerCreateManyPersonInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
