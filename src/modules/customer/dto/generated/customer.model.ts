import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { Person } from '../../../person/dto/generated/person.model';
import { Workshop } from '../../../workshop/dto/generated/workshop.model';
import { Service } from '../../../service/dto/generated/service.model';
import { CustomerCount } from './customer-count.output';

@ObjectType()
export class Customer {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    customerId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint;

    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0})
    totalDue!: Decimal;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => String, {nullable:true})
    NIP!: string | null;

    @Field(() => String, {nullable:true})
    companyName!: string | null;

    @Field(() => Person, {nullable:false})
    person?: Person;

    @Field(() => Workshop, {nullable:false})
    workshop?: Workshop;

    @Field(() => [Service], {nullable:true})
    services?: Array<Service>;

    @Field(() => CustomerCount, {nullable:false})
    _count?: CustomerCount;
}
