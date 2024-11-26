import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutServicesInput } from './customer-create-without-services.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CustomerCreateOrConnectWithoutServicesInput } from './customer-create-or-connect-without-services.input';
import { CustomerUpsertWithoutServicesInput } from './customer-upsert-without-services.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerUpdateToOneWithWhereWithoutServicesInput } from './customer-update-to-one-with-where-without-services.input';

@InputType()
export class CustomerUpdateOneRequiredWithoutServicesNestedInput {

    @Field(() => CustomerCreateWithoutServicesInput, {nullable:true})
    @Type(() => CustomerCreateWithoutServicesInput)
    @ValidateNested()
    create?: CustomerCreateWithoutServicesInput;

    @Field(() => CustomerCreateOrConnectWithoutServicesInput, {nullable:true})
    @Type(() => CustomerCreateOrConnectWithoutServicesInput)
    @ValidateNested()
    connectOrCreate?: CustomerCreateOrConnectWithoutServicesInput;

    @Field(() => CustomerUpsertWithoutServicesInput, {nullable:true})
    @Type(() => CustomerUpsertWithoutServicesInput)
    @ValidateNested()
    upsert?: CustomerUpsertWithoutServicesInput;

    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId'>;

    @Field(() => CustomerUpdateToOneWithWhereWithoutServicesInput, {nullable:true})
    @Type(() => CustomerUpdateToOneWithWhereWithoutServicesInput)
    @ValidateNested()
    update?: CustomerUpdateToOneWithWhereWithoutServicesInput;
}
