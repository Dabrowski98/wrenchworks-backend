import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutCustomersInput } from './workshop-create-without-customers.input';
import { Type } from 'class-transformer';
import { WorkshopCreateOrConnectWithoutCustomersInput } from './workshop-create-or-connect-without-customers.input';
import { WorkshopUpsertWithoutCustomersInput } from './workshop-upsert-without-customers.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { WorkshopUpdateToOneWithWhereWithoutCustomersInput } from './workshop-update-to-one-with-where-without-customers.input';

@InputType()
export class WorkshopUpdateOneRequiredWithoutCustomersNestedInput {

    @Field(() => WorkshopCreateWithoutCustomersInput, {nullable:true})
    @Type(() => WorkshopCreateWithoutCustomersInput)
    create?: WorkshopCreateWithoutCustomersInput;

    @Field(() => WorkshopCreateOrConnectWithoutCustomersInput, {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutCustomersInput)
    connectOrCreate?: WorkshopCreateOrConnectWithoutCustomersInput;

    @Field(() => WorkshopUpsertWithoutCustomersInput, {nullable:true})
    @Type(() => WorkshopUpsertWithoutCustomersInput)
    upsert?: WorkshopUpsertWithoutCustomersInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;

    @Field(() => WorkshopUpdateToOneWithWhereWithoutCustomersInput, {nullable:true})
    @Type(() => WorkshopUpdateToOneWithWhereWithoutCustomersInput)
    update?: WorkshopUpdateToOneWithWhereWithoutCustomersInput;
}
