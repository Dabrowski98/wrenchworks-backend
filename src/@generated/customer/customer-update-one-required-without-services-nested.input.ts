import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutServicesInput } from './customer-create-without-services.input';
import { Type } from 'class-transformer';
import { CustomerCreateOrConnectWithoutServicesInput } from './customer-create-or-connect-without-services.input';
import { CustomerUpsertWithoutServicesInput } from './customer-upsert-without-services.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerUpdateToOneWithWhereWithoutServicesInput } from './customer-update-to-one-with-where-without-services.input';

@InputType()
export class CustomerUpdateOneRequiredWithoutServicesNestedInput {

    @Field(() => CustomerCreateWithoutServicesInput, {nullable:true})
    @Type(() => CustomerCreateWithoutServicesInput)
    create?: CustomerCreateWithoutServicesInput;

    @Field(() => CustomerCreateOrConnectWithoutServicesInput, {nullable:true})
    @Type(() => CustomerCreateOrConnectWithoutServicesInput)
    connectOrCreate?: CustomerCreateOrConnectWithoutServicesInput;

    @Field(() => CustomerUpsertWithoutServicesInput, {nullable:true})
    @Type(() => CustomerUpsertWithoutServicesInput)
    upsert?: CustomerUpsertWithoutServicesInput;

    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    connect?: Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId_workshopId'>;

    @Field(() => CustomerUpdateToOneWithWhereWithoutServicesInput, {nullable:true})
    @Type(() => CustomerUpdateToOneWithWhereWithoutServicesInput)
    update?: CustomerUpdateToOneWithWhereWithoutServicesInput;
}
