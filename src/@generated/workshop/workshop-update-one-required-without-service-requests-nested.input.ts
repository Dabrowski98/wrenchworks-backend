import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutServiceRequestsInput } from './workshop-create-without-service-requests.input';
import { Type } from 'class-transformer';
import { WorkshopCreateOrConnectWithoutServiceRequestsInput } from './workshop-create-or-connect-without-service-requests.input';
import { WorkshopUpsertWithoutServiceRequestsInput } from './workshop-upsert-without-service-requests.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { WorkshopUpdateToOneWithWhereWithoutServiceRequestsInput } from './workshop-update-to-one-with-where-without-service-requests.input';

@InputType()
export class WorkshopUpdateOneRequiredWithoutServiceRequestsNestedInput {

    @Field(() => WorkshopCreateWithoutServiceRequestsInput, {nullable:true})
    @Type(() => WorkshopCreateWithoutServiceRequestsInput)
    create?: WorkshopCreateWithoutServiceRequestsInput;

    @Field(() => WorkshopCreateOrConnectWithoutServiceRequestsInput, {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutServiceRequestsInput)
    connectOrCreate?: WorkshopCreateOrConnectWithoutServiceRequestsInput;

    @Field(() => WorkshopUpsertWithoutServiceRequestsInput, {nullable:true})
    @Type(() => WorkshopUpsertWithoutServiceRequestsInput)
    upsert?: WorkshopUpsertWithoutServiceRequestsInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;

    @Field(() => WorkshopUpdateToOneWithWhereWithoutServiceRequestsInput, {nullable:true})
    @Type(() => WorkshopUpdateToOneWithWhereWithoutServiceRequestsInput)
    update?: WorkshopUpdateToOneWithWhereWithoutServiceRequestsInput;
}