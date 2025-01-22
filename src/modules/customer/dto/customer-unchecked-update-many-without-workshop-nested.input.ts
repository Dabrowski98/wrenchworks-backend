import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutWorkshopInput } from './customer-create-without-workshop.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CustomerCreateOrConnectWithoutWorkshopInput } from './customer-create-or-connect-without-workshop.input';
import { CustomerUpsertWithWhereUniqueWithoutWorkshopInput } from './customer-upsert-with-where-unique-without-workshop.input';
import { CustomerCreateManyWorkshopInputEnvelope } from './customer-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerUpdateWithWhereUniqueWithoutWorkshopInput } from './customer-update-with-where-unique-without-workshop.input';
import { CustomerUpdateManyWithWhereWithoutWorkshopInput } from './customer-update-many-with-where-without-workshop.input';
import { CustomerScalarWhereInput } from './customer-scalar-where.input';

@InputType()
export class CustomerUncheckedUpdateManyWithoutWorkshopNestedInput {

    @Field(() => [CustomerCreateWithoutWorkshopInput], {nullable:true})
    @Type(() => CustomerCreateWithoutWorkshopInput)
    @ValidateNested()
    create?: Array<CustomerCreateWithoutWorkshopInput>;

    @Field(() => [CustomerCreateOrConnectWithoutWorkshopInput], {nullable:true})
    @Type(() => CustomerCreateOrConnectWithoutWorkshopInput)
    @ValidateNested()
    connectOrCreate?: Array<CustomerCreateOrConnectWithoutWorkshopInput>;

    @Field(() => [CustomerUpsertWithWhereUniqueWithoutWorkshopInput], {nullable:true})
    @Type(() => CustomerUpsertWithWhereUniqueWithoutWorkshopInput)
    @ValidateNested()
    upsert?: Array<CustomerUpsertWithWhereUniqueWithoutWorkshopInput>;

    @Field(() => CustomerCreateManyWorkshopInputEnvelope, {nullable:true})
    @Type(() => CustomerCreateManyWorkshopInputEnvelope)
    @ValidateNested()
    createMany?: CustomerCreateManyWorkshopInputEnvelope;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    @ValidateNested()
    set?: Array<Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId' | 'userId_workshopId'>>;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    @ValidateNested()
    disconnect?: Array<Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId' | 'userId_workshopId'>>;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    @ValidateNested()
    delete?: Array<Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId' | 'userId_workshopId'>>;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId' | 'userId_workshopId'>>;

    @Field(() => [CustomerUpdateWithWhereUniqueWithoutWorkshopInput], {nullable:true})
    @Type(() => CustomerUpdateWithWhereUniqueWithoutWorkshopInput)
    @ValidateNested()
    update?: Array<CustomerUpdateWithWhereUniqueWithoutWorkshopInput>;

    @Field(() => [CustomerUpdateManyWithWhereWithoutWorkshopInput], {nullable:true})
    @Type(() => CustomerUpdateManyWithWhereWithoutWorkshopInput)
    @ValidateNested()
    updateMany?: Array<CustomerUpdateManyWithWhereWithoutWorkshopInput>;

    @Field(() => [CustomerScalarWhereInput], {nullable:true})
    @Type(() => CustomerScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<CustomerScalarWhereInput>;
}
