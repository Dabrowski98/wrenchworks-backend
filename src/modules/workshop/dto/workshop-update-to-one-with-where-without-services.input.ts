import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopWhereInput } from './workshop-where.input';
import { Type } from 'class-transformer';
import { WorkshopUpdateWithoutServicesInput } from './workshop-update-without-services.input';

@InputType()
export class WorkshopUpdateToOneWithWhereWithoutServicesInput {

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;

    @Field(() => WorkshopUpdateWithoutServicesInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutServicesInput)
    data!: WorkshopUpdateWithoutServicesInput;
}
