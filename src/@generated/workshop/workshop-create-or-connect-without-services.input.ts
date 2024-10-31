import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopCreateWithoutServicesInput } from './workshop-create-without-services.input';

@InputType()
export class WorkshopCreateOrConnectWithoutServicesInput {

    @Field(() => WorkshopWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;

    @Field(() => WorkshopCreateWithoutServicesInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutServicesInput)
    create!: WorkshopCreateWithoutServicesInput;
}
