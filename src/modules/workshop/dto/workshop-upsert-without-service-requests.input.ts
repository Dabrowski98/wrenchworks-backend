import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopUpdateWithoutServiceRequestsInput } from './workshop-update-without-service-requests.input';
import { Type } from 'class-transformer';
import { WorkshopCreateWithoutServiceRequestsInput } from './workshop-create-without-service-requests.input';
import { WorkshopWhereInput } from './workshop-where.input';

@InputType()
export class WorkshopUpsertWithoutServiceRequestsInput {

    @Field(() => WorkshopUpdateWithoutServiceRequestsInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutServiceRequestsInput)
    update!: WorkshopUpdateWithoutServiceRequestsInput;

    @Field(() => WorkshopCreateWithoutServiceRequestsInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutServiceRequestsInput)
    create!: WorkshopCreateWithoutServiceRequestsInput;

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;
}
