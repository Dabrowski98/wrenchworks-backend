import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutServicesInput } from './workshop-create-without-services.input';
import { Type } from 'class-transformer';
import { WorkshopCreateOrConnectWithoutServicesInput } from './workshop-create-or-connect-without-services.input';
import { WorkshopUpsertWithoutServicesInput } from './workshop-upsert-without-services.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { WorkshopUpdateToOneWithWhereWithoutServicesInput } from './workshop-update-to-one-with-where-without-services.input';

@InputType()
export class WorkshopUpdateOneRequiredWithoutServicesNestedInput {

    @Field(() => WorkshopCreateWithoutServicesInput, {nullable:true})
    @Type(() => WorkshopCreateWithoutServicesInput)
    create?: WorkshopCreateWithoutServicesInput;

    @Field(() => WorkshopCreateOrConnectWithoutServicesInput, {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutServicesInput)
    connectOrCreate?: WorkshopCreateOrConnectWithoutServicesInput;

    @Field(() => WorkshopUpsertWithoutServicesInput, {nullable:true})
    @Type(() => WorkshopUpsertWithoutServicesInput)
    upsert?: WorkshopUpsertWithoutServicesInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;

    @Field(() => WorkshopUpdateToOneWithWhereWithoutServicesInput, {nullable:true})
    @Type(() => WorkshopUpdateToOneWithWhereWithoutServicesInput)
    update?: WorkshopUpdateToOneWithWhereWithoutServicesInput;
}