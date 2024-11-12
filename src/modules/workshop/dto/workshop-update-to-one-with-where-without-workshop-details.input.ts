import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopWhereInput } from './workshop-where.input';
import { Type } from 'class-transformer';
import { WorkshopUpdateWithoutWorkshopDetailsInput } from './workshop-update-without-workshop-details.input';

@InputType()
export class WorkshopUpdateToOneWithWhereWithoutWorkshopDetailsInput {

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;

    @Field(() => WorkshopUpdateWithoutWorkshopDetailsInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutWorkshopDetailsInput)
    data!: WorkshopUpdateWithoutWorkshopDetailsInput;
}
