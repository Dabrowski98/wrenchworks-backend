import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopCreateWithoutCustomersInput } from './workshop-create-without-customers.input';

@InputType()
export class WorkshopCreateOrConnectWithoutCustomersInput {

    @Field(() => WorkshopWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;

    @Field(() => WorkshopCreateWithoutCustomersInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutCustomersInput)
    create!: WorkshopCreateWithoutCustomersInput;
}
