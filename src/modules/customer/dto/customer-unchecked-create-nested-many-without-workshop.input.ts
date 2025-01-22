import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutWorkshopInput } from './customer-create-without-workshop.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CustomerCreateOrConnectWithoutWorkshopInput } from './customer-create-or-connect-without-workshop.input';
import { CustomerCreateManyWorkshopInputEnvelope } from './customer-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';

@InputType()
export class CustomerUncheckedCreateNestedManyWithoutWorkshopInput {

    @Field(() => [CustomerCreateWithoutWorkshopInput], {nullable:true})
    @Type(() => CustomerCreateWithoutWorkshopInput)
    @ValidateNested()
    create?: Array<CustomerCreateWithoutWorkshopInput>;

    @Field(() => [CustomerCreateOrConnectWithoutWorkshopInput], {nullable:true})
    @Type(() => CustomerCreateOrConnectWithoutWorkshopInput)
    @ValidateNested()
    connectOrCreate?: Array<CustomerCreateOrConnectWithoutWorkshopInput>;

    @Field(() => CustomerCreateManyWorkshopInputEnvelope, {nullable:true})
    @Type(() => CustomerCreateManyWorkshopInputEnvelope)
    @ValidateNested()
    createMany?: CustomerCreateManyWorkshopInputEnvelope;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId' | 'userId_workshopId'>>;
}
