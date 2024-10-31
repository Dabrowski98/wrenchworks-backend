import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { PersonCreateNestedOneWithoutCustomersInput } from '../person/person-create-nested-one-without-customers.input';
import { ServiceCreateNestedManyWithoutCustomerInput } from '../service/service-create-nested-many-without-customer.input';

@InputType()
export class CustomerCreateWithoutWorkshopInput {

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    totalDue?: Decimal;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:true})
    NIP?: string;

    @Field(() => String, {nullable:true})
    companyName?: string;

    @Field(() => PersonCreateNestedOneWithoutCustomersInput, {nullable:false})
    @Type(() => PersonCreateNestedOneWithoutCustomersInput)
    person!: PersonCreateNestedOneWithoutCustomersInput;

    @Field(() => ServiceCreateNestedManyWithoutCustomerInput, {nullable:true})
    @Type(() => ServiceCreateNestedManyWithoutCustomerInput)
    services?: ServiceCreateNestedManyWithoutCustomerInput;
}