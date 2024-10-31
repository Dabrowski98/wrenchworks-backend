import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutPersonInput } from './customer-create-without-person.input';
import { Type } from 'class-transformer';
import { CustomerCreateOrConnectWithoutPersonInput } from './customer-create-or-connect-without-person.input';
import { CustomerCreateManyPersonInputEnvelope } from './customer-create-many-person-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';

@InputType()
export class CustomerCreateNestedManyWithoutPersonInput {

    @Field(() => [CustomerCreateWithoutPersonInput], {nullable:true})
    @Type(() => CustomerCreateWithoutPersonInput)
    create?: Array<CustomerCreateWithoutPersonInput>;

    @Field(() => [CustomerCreateOrConnectWithoutPersonInput], {nullable:true})
    @Type(() => CustomerCreateOrConnectWithoutPersonInput)
    connectOrCreate?: Array<CustomerCreateOrConnectWithoutPersonInput>;

    @Field(() => CustomerCreateManyPersonInputEnvelope, {nullable:true})
    @Type(() => CustomerCreateManyPersonInputEnvelope)
    createMany?: CustomerCreateManyPersonInputEnvelope;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId_workshopId'>>;
}
