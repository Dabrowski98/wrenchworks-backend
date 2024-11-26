import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutCustomersInput } from './workshop-create-without-customers.input';
import { HideField } from '@nestjs/graphql';
import { WorkshopCreateOrConnectWithoutCustomersInput } from './workshop-create-or-connect-without-customers.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class WorkshopCreateNestedOneWithoutCustomersInput {

    @HideField()
    create?: WorkshopCreateWithoutCustomersInput;

    @HideField()
    connectOrCreate?: WorkshopCreateOrConnectWithoutCustomersInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId'>;
}
