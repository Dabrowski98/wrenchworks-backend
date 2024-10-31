import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutPermissionSetsInput } from './workshop-create-without-permission-sets.input';
import { Type } from 'class-transformer';
import { WorkshopCreateOrConnectWithoutPermissionSetsInput } from './workshop-create-or-connect-without-permission-sets.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';

@InputType()
export class WorkshopCreateNestedOneWithoutPermissionSetsInput {

    @Field(() => WorkshopCreateWithoutPermissionSetsInput, {nullable:true})
    @Type(() => WorkshopCreateWithoutPermissionSetsInput)
    create?: WorkshopCreateWithoutPermissionSetsInput;

    @Field(() => WorkshopCreateOrConnectWithoutPermissionSetsInput, {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutPermissionSetsInput)
    connectOrCreate?: WorkshopCreateOrConnectWithoutPermissionSetsInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;
}
