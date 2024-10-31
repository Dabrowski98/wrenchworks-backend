import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutServicesInput } from './workshop-create-without-services.input';
import { Type } from 'class-transformer';
import { WorkshopCreateOrConnectWithoutServicesInput } from './workshop-create-or-connect-without-services.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';

@InputType()
export class WorkshopCreateNestedOneWithoutServicesInput {

    @Field(() => WorkshopCreateWithoutServicesInput, {nullable:true})
    @Type(() => WorkshopCreateWithoutServicesInput)
    create?: WorkshopCreateWithoutServicesInput;

    @Field(() => WorkshopCreateOrConnectWithoutServicesInput, {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutServicesInput)
    connectOrCreate?: WorkshopCreateOrConnectWithoutServicesInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;
}
