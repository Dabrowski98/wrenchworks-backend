import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutPermissionSetsInput } from './workshop-create-without-permission-sets.input';
import { Type } from 'class-transformer';
import { WorkshopCreateOrConnectWithoutPermissionSetsInput } from './workshop-create-or-connect-without-permission-sets.input';
import { WorkshopUpsertWithoutPermissionSetsInput } from './workshop-upsert-without-permission-sets.input';
import { WorkshopWhereInput } from './workshop-where.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { WorkshopUpdateToOneWithWhereWithoutPermissionSetsInput } from './workshop-update-to-one-with-where-without-permission-sets.input';

@InputType()
export class WorkshopUpdateOneWithoutPermissionSetsNestedInput {

    @Field(() => WorkshopCreateWithoutPermissionSetsInput, {nullable:true})
    @Type(() => WorkshopCreateWithoutPermissionSetsInput)
    create?: WorkshopCreateWithoutPermissionSetsInput;

    @Field(() => WorkshopCreateOrConnectWithoutPermissionSetsInput, {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutPermissionSetsInput)
    connectOrCreate?: WorkshopCreateOrConnectWithoutPermissionSetsInput;

    @Field(() => WorkshopUpsertWithoutPermissionSetsInput, {nullable:true})
    @Type(() => WorkshopUpsertWithoutPermissionSetsInput)
    upsert?: WorkshopUpsertWithoutPermissionSetsInput;

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    disconnect?: WorkshopWhereInput;

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    delete?: WorkshopWhereInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;

    @Field(() => WorkshopUpdateToOneWithWhereWithoutPermissionSetsInput, {nullable:true})
    @Type(() => WorkshopUpdateToOneWithWhereWithoutPermissionSetsInput)
    update?: WorkshopUpdateToOneWithWhereWithoutPermissionSetsInput;
}
