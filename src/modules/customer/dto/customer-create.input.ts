import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { HideField } from '@nestjs/graphql';
import { PersonCreateNestedOneWithoutCustomersInput } from '../person/person-create-nested-one-without-customers.input';
import { WorkshopCreateNestedOneWithoutCustomersInput } from '../workshop/workshop-create-nested-one-without-customers.input';
import { ServiceCreateNestedManyWithoutCustomerInput } from '../service/service-create-nested-many-without-customer.input';

@InputType()
export class CustomerCreateInput {

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    totalDue?: Decimal;

    @Field(() => String, {nullable:true})
    description?: string;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => String, {nullable:true})
    NIP?: string;

    @Field(() => String, {nullable:true})
    companyName?: string;

    @Field(() => PersonCreateNestedOneWithoutCustomersInput, {nullable:false})
    @Type(() => PersonCreateNestedOneWithoutCustomersInput)
    person!: PersonCreateNestedOneWithoutCustomersInput;

    @Field(() => WorkshopCreateNestedOneWithoutCustomersInput, {nullable:false})
    @Type(() => WorkshopCreateNestedOneWithoutCustomersInput)
    workshop!: WorkshopCreateNestedOneWithoutCustomersInput;

    @Field(() => ServiceCreateNestedManyWithoutCustomerInput, {nullable:true})
    @Type(() => ServiceCreateNestedManyWithoutCustomerInput)
    services?: ServiceCreateNestedManyWithoutCustomerInput;
}
