import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerWhereInput } from './customer-where.input';
import { Type } from 'class-transformer';
import { CustomerUpdateWithoutServicesInput } from './customer-update-without-services.input';

@InputType()
export class CustomerUpdateToOneWithWhereWithoutServicesInput {

    @Field(() => CustomerWhereInput, {nullable:true})
    @Type(() => CustomerWhereInput)
    where?: CustomerWhereInput;

    @Field(() => CustomerUpdateWithoutServicesInput, {nullable:false})
    @Type(() => CustomerUpdateWithoutServicesInput)
    data!: CustomerUpdateWithoutServicesInput;
}
