import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutServiceRequestsInput } from './workshop-create-without-service-requests.input';
import { HideField } from '@nestjs/graphql';
import { WorkshopCreateOrConnectWithoutServiceRequestsInput } from './workshop-create-or-connect-without-service-requests.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class WorkshopCreateNestedOneWithoutServiceRequestsInput {

    @HideField()
    create?: WorkshopCreateWithoutServiceRequestsInput;

    @HideField()
    connectOrCreate?: WorkshopCreateOrConnectWithoutServiceRequestsInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId'>;
}
