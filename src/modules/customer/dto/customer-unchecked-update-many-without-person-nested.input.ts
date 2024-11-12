import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutPersonInput } from './customer-create-without-person.input';
import { Type } from 'class-transformer';
import { CustomerCreateOrConnectWithoutPersonInput } from './customer-create-or-connect-without-person.input';
import { CustomerUpsertWithWhereUniqueWithoutPersonInput } from './customer-upsert-with-where-unique-without-person.input';
import { CustomerCreateManyPersonInputEnvelope } from './customer-create-many-person-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerUpdateWithWhereUniqueWithoutPersonInput } from './customer-update-with-where-unique-without-person.input';
import { CustomerUpdateManyWithWhereWithoutPersonInput } from './customer-update-many-with-where-without-person.input';
import { CustomerScalarWhereInput } from './customer-scalar-where.input';

@InputType()
export class CustomerUncheckedUpdateManyWithoutPersonNestedInput {

    @Field(() => [CustomerCreateWithoutPersonInput], {nullable:true})
    @Type(() => CustomerCreateWithoutPersonInput)
    create?: Array<CustomerCreateWithoutPersonInput>;

    @Field(() => [CustomerCreateOrConnectWithoutPersonInput], {nullable:true})
    @Type(() => CustomerCreateOrConnectWithoutPersonInput)
    connectOrCreate?: Array<CustomerCreateOrConnectWithoutPersonInput>;

    @Field(() => [CustomerUpsertWithWhereUniqueWithoutPersonInput], {nullable:true})
    @Type(() => CustomerUpsertWithWhereUniqueWithoutPersonInput)
    upsert?: Array<CustomerUpsertWithWhereUniqueWithoutPersonInput>;

    @Field(() => CustomerCreateManyPersonInputEnvelope, {nullable:true})
    @Type(() => CustomerCreateManyPersonInputEnvelope)
    createMany?: CustomerCreateManyPersonInputEnvelope;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId_workshopId'>>;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId_workshopId'>>;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId_workshopId'>>;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId_workshopId'>>;

    @Field(() => [CustomerUpdateWithWhereUniqueWithoutPersonInput], {nullable:true})
    @Type(() => CustomerUpdateWithWhereUniqueWithoutPersonInput)
    update?: Array<CustomerUpdateWithWhereUniqueWithoutPersonInput>;

    @Field(() => [CustomerUpdateManyWithWhereWithoutPersonInput], {nullable:true})
    @Type(() => CustomerUpdateManyWithWhereWithoutPersonInput)
    updateMany?: Array<CustomerUpdateManyWithWhereWithoutPersonInput>;

    @Field(() => [CustomerScalarWhereInput], {nullable:true})
    @Type(() => CustomerScalarWhereInput)
    deleteMany?: Array<CustomerScalarWhereInput>;
}
