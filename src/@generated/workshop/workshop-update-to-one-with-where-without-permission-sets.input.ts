import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopWhereInput } from './workshop-where.input';
import { Type } from 'class-transformer';
import { WorkshopUpdateWithoutPermissionSetsInput } from './workshop-update-without-permission-sets.input';

@InputType()
export class WorkshopUpdateToOneWithWhereWithoutPermissionSetsInput {

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;

    @Field(() => WorkshopUpdateWithoutPermissionSetsInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutPermissionSetsInput)
    data!: WorkshopUpdateWithoutPermissionSetsInput;
}
