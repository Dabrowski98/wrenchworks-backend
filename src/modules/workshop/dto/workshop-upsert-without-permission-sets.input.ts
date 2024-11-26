import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopUpdateWithoutPermissionSetsInput } from './workshop-update-without-permission-sets.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopCreateWithoutPermissionSetsInput } from './workshop-create-without-permission-sets.input';
import { WorkshopWhereInput } from './workshop-where.input';

@InputType()
export class WorkshopUpsertWithoutPermissionSetsInput {

    @Field(() => WorkshopUpdateWithoutPermissionSetsInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutPermissionSetsInput)
    @ValidateNested()
    update!: WorkshopUpdateWithoutPermissionSetsInput;

    @Field(() => WorkshopCreateWithoutPermissionSetsInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutPermissionSetsInput)
    @ValidateNested()
    create!: WorkshopCreateWithoutPermissionSetsInput;

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;
}
