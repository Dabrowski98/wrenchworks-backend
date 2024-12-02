import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopCreateWithoutPermissionSetsInput } from './workshop-create-without-permission-sets.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class WorkshopCreateOrConnectWithoutPermissionSetsInput {

    @Field(() => WorkshopWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId' | 'email'>;

    @Field(() => WorkshopCreateWithoutPermissionSetsInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutPermissionSetsInput)
    @ValidateNested()
    create!: WorkshopCreateWithoutPermissionSetsInput;
}
