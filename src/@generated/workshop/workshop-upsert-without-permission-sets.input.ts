import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopUpdateWithoutPermissionSetsInput } from './workshop-update-without-permission-sets.input';
import { Type } from 'class-transformer';
import { WorkshopCreateWithoutPermissionSetsInput } from './workshop-create-without-permission-sets.input';
import { WorkshopWhereInput } from './workshop-where.input';

@InputType()
export class WorkshopUpsertWithoutPermissionSetsInput {

    @Field(() => WorkshopUpdateWithoutPermissionSetsInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutPermissionSetsInput)
    update!: WorkshopUpdateWithoutPermissionSetsInput;

    @Field(() => WorkshopCreateWithoutPermissionSetsInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutPermissionSetsInput)
    create!: WorkshopCreateWithoutPermissionSetsInput;

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;
}
