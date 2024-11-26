import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateManyUserInput } from './customer-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class CustomerCreateManyUserInputEnvelope {

    @Field(() => [CustomerCreateManyUserInput], {nullable:false})
    @Type(() => CustomerCreateManyUserInput)
    data!: Array<CustomerCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
