import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutWorkshopInput } from './customer-create-without-workshop.input';
import { Type } from 'class-transformer';
import { CustomerCreateOrConnectWithoutWorkshopInput } from './customer-create-or-connect-without-workshop.input';
import { CustomerUpsertWithWhereUniqueWithoutWorkshopInput } from './customer-upsert-with-where-unique-without-workshop.input';
import { CustomerCreateManyWorkshopInputEnvelope } from './customer-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerUpdateWithWhereUniqueWithoutWorkshopInput } from './customer-update-with-where-unique-without-workshop.input';
import { CustomerUpdateManyWithWhereWithoutWorkshopInput } from './customer-update-many-with-where-without-workshop.input';
import { CustomerScalarWhereInput } from './customer-scalar-where.input';

@InputType()
export class CustomerUpdateManyWithoutWorkshopNestedInput {

    @Field(() => [CustomerCreateWithoutWorkshopInput], {nullable:true})
    @Type(() => CustomerCreateWithoutWorkshopInput)
    create?: Array<CustomerCreateWithoutWorkshopInput>;

    @Field(() => [CustomerCreateOrConnectWithoutWorkshopInput], {nullable:true})
    @Type(() => CustomerCreateOrConnectWithoutWorkshopInput)
    connectOrCreate?: Array<CustomerCreateOrConnectWithoutWorkshopInput>;

    @Field(() => [CustomerUpsertWithWhereUniqueWithoutWorkshopInput], {nullable:true})
    @Type(() => CustomerUpsertWithWhereUniqueWithoutWorkshopInput)
    upsert?: Array<CustomerUpsertWithWhereUniqueWithoutWorkshopInput>;

    @Field(() => CustomerCreateManyWorkshopInputEnvelope, {nullable:true})
    @Type(() => CustomerCreateManyWorkshopInputEnvelope)
    createMany?: CustomerCreateManyWorkshopInputEnvelope;

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

    @Field(() => [CustomerUpdateWithWhereUniqueWithoutWorkshopInput], {nullable:true})
    @Type(() => CustomerUpdateWithWhereUniqueWithoutWorkshopInput)
    update?: Array<CustomerUpdateWithWhereUniqueWithoutWorkshopInput>;

    @Field(() => [CustomerUpdateManyWithWhereWithoutWorkshopInput], {nullable:true})
    @Type(() => CustomerUpdateManyWithWhereWithoutWorkshopInput)
    updateMany?: Array<CustomerUpdateManyWithWhereWithoutWorkshopInput>;

    @Field(() => [CustomerScalarWhereInput], {nullable:true})
    @Type(() => CustomerScalarWhereInput)
    deleteMany?: Array<CustomerScalarWhereInput>;
}
