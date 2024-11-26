import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopUpdateWithoutJoinWorkshopRequestsInput } from './workshop-update-without-join-workshop-requests.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopCreateWithoutJoinWorkshopRequestsInput } from './workshop-create-without-join-workshop-requests.input';
import { WorkshopWhereInput } from './workshop-where.input';

@InputType()
export class WorkshopUpsertWithoutJoinWorkshopRequestsInput {

    @Field(() => WorkshopUpdateWithoutJoinWorkshopRequestsInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutJoinWorkshopRequestsInput)
    @ValidateNested()
    update!: WorkshopUpdateWithoutJoinWorkshopRequestsInput;

    @Field(() => WorkshopCreateWithoutJoinWorkshopRequestsInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutJoinWorkshopRequestsInput)
    @ValidateNested()
    create!: WorkshopCreateWithoutJoinWorkshopRequestsInput;

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;
}
