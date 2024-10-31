import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { ServiceUncheckedCreateNestedManyWithoutCustomerInput } from '../service/service-unchecked-create-nested-many-without-customer.input';

@InputType()
export class CustomerUncheckedCreateWithoutWorkshopInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    customerId!: bigint | number;

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

    @Field(() => ServiceUncheckedCreateNestedManyWithoutCustomerInput, {nullable:true})
    @Type(() => ServiceUncheckedCreateNestedManyWithoutCustomerInput)
    services?: ServiceUncheckedCreateNestedManyWithoutCustomerInput;
}
