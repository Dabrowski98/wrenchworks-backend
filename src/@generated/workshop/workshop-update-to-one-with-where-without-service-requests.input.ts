import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopWhereInput } from './workshop-where.input';
import { Type } from 'class-transformer';
import { WorkshopUpdateWithoutServiceRequestsInput } from './workshop-update-without-service-requests.input';

@InputType()
export class WorkshopUpdateToOneWithWhereWithoutServiceRequestsInput {

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;

    @Field(() => WorkshopUpdateWithoutServiceRequestsInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutServiceRequestsInput)
    data!: WorkshopUpdateWithoutServiceRequestsInput;
}
