import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopCreateWithoutServiceRequestsInput } from './workshop-create-without-service-requests.input';

@InputType()
export class WorkshopCreateOrConnectWithoutServiceRequestsInput {

    @Field(() => WorkshopWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;

    @Field(() => WorkshopCreateWithoutServiceRequestsInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutServiceRequestsInput)
    create!: WorkshopCreateWithoutServiceRequestsInput;
}
