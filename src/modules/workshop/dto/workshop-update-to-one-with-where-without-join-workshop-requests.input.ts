import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopWhereInput } from './workshop-where.input';
import { Type } from 'class-transformer';
import { WorkshopUpdateWithoutJoinWorkshopRequestsInput } from './workshop-update-without-join-workshop-requests.input';

@InputType()
export class WorkshopUpdateToOneWithWhereWithoutJoinWorkshopRequestsInput {

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;

    @Field(() => WorkshopUpdateWithoutJoinWorkshopRequestsInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutJoinWorkshopRequestsInput)
    data!: WorkshopUpdateWithoutJoinWorkshopRequestsInput;
}
