import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutCustomersInput } from './workshop-create-without-customers.input';
import { Type } from 'class-transformer';
import { WorkshopCreateOrConnectWithoutCustomersInput } from './workshop-create-or-connect-without-customers.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';

@InputType()
export class WorkshopCreateNestedOneWithoutCustomersInput {

    @Field(() => WorkshopCreateWithoutCustomersInput, {nullable:true})
    @Type(() => WorkshopCreateWithoutCustomersInput)
    create?: WorkshopCreateWithoutCustomersInput;

    @Field(() => WorkshopCreateOrConnectWithoutCustomersInput, {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutCustomersInput)
    connectOrCreate?: WorkshopCreateOrConnectWithoutCustomersInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;
}
