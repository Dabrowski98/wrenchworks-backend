import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutWorkshopInput } from './customer-create-without-workshop.input';
import { HideField } from '@nestjs/graphql';
import { CustomerCreateOrConnectWithoutWorkshopInput } from './customer-create-or-connect-without-workshop.input';
import { CustomerCreateManyWorkshopInputEnvelope } from './customer-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class CustomerCreateNestedManyWithoutWorkshopInput {

    @HideField()
    create?: Array<CustomerCreateWithoutWorkshopInput>;

    @HideField()
    connectOrCreate?: Array<CustomerCreateOrConnectWithoutWorkshopInput>;

    @HideField()
    createMany?: CustomerCreateManyWorkshopInputEnvelope;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId'>>;
}
