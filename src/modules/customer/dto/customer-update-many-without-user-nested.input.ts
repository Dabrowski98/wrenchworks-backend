import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutUserInput } from './customer-create-without-user.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CustomerCreateOrConnectWithoutUserInput } from './customer-create-or-connect-without-user.input';
import { CustomerUpsertWithWhereUniqueWithoutUserInput } from './customer-upsert-with-where-unique-without-user.input';
import { CustomerCreateManyUserInputEnvelope } from './customer-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerUpdateWithWhereUniqueWithoutUserInput } from './customer-update-with-where-unique-without-user.input';
import { CustomerUpdateManyWithWhereWithoutUserInput } from './customer-update-many-with-where-without-user.input';
import { CustomerScalarWhereInput } from './customer-scalar-where.input';

@InputType()
export class CustomerUpdateManyWithoutUserNestedInput {

    @Field(() => [CustomerCreateWithoutUserInput], {nullable:true})
    @Type(() => CustomerCreateWithoutUserInput)
    @ValidateNested()
    create?: Array<CustomerCreateWithoutUserInput>;

    @Field(() => [CustomerCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CustomerCreateOrConnectWithoutUserInput)
    @ValidateNested()
    connectOrCreate?: Array<CustomerCreateOrConnectWithoutUserInput>;

    @Field(() => [CustomerUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CustomerUpsertWithWhereUniqueWithoutUserInput)
    @ValidateNested()
    upsert?: Array<CustomerUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => CustomerCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CustomerCreateManyUserInputEnvelope)
    @ValidateNested()
    createMany?: CustomerCreateManyUserInputEnvelope;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    @ValidateNested()
    set?: Array<Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId'>>;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    @ValidateNested()
    disconnect?: Array<Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId'>>;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    @ValidateNested()
    delete?: Array<Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId'>>;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId'>>;

    @Field(() => [CustomerUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CustomerUpdateWithWhereUniqueWithoutUserInput)
    @ValidateNested()
    update?: Array<CustomerUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [CustomerUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => CustomerUpdateManyWithWhereWithoutUserInput)
    @ValidateNested()
    updateMany?: Array<CustomerUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [CustomerScalarWhereInput], {nullable:true})
    @Type(() => CustomerScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<CustomerScalarWhereInput>;
}
