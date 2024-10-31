import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerUpdateWithoutServicesInput } from './customer-update-without-services.input';
import { Type } from 'class-transformer';
import { CustomerCreateWithoutServicesInput } from './customer-create-without-services.input';
import { CustomerWhereInput } from './customer-where.input';

@InputType()
export class CustomerUpsertWithoutServicesInput {

    @Field(() => CustomerUpdateWithoutServicesInput, {nullable:false})
    @Type(() => CustomerUpdateWithoutServicesInput)
    update!: CustomerUpdateWithoutServicesInput;

    @Field(() => CustomerCreateWithoutServicesInput, {nullable:false})
    @Type(() => CustomerCreateWithoutServicesInput)
    create!: CustomerCreateWithoutServicesInput;

    @Field(() => CustomerWhereInput, {nullable:true})
    @Type(() => CustomerWhereInput)
    where?: CustomerWhereInput;
}
