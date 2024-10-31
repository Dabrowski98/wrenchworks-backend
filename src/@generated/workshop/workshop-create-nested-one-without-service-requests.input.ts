import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutServiceRequestsInput } from './workshop-create-without-service-requests.input';
import { Type } from 'class-transformer';
import { WorkshopCreateOrConnectWithoutServiceRequestsInput } from './workshop-create-or-connect-without-service-requests.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';

@InputType()
export class WorkshopCreateNestedOneWithoutServiceRequestsInput {

    @Field(() => WorkshopCreateWithoutServiceRequestsInput, {nullable:true})
    @Type(() => WorkshopCreateWithoutServiceRequestsInput)
    create?: WorkshopCreateWithoutServiceRequestsInput;

    @Field(() => WorkshopCreateOrConnectWithoutServiceRequestsInput, {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutServiceRequestsInput)
    connectOrCreate?: WorkshopCreateOrConnectWithoutServiceRequestsInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;
}
