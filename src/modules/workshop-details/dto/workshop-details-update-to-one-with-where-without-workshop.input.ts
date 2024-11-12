import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopDetailsWhereInput } from './workshop-details-where.input';
import { Type } from 'class-transformer';
import { WorkshopDetailsUpdateWithoutWorkshopInput } from './workshop-details-update-without-workshop.input';

@InputType()
export class WorkshopDetailsUpdateToOneWithWhereWithoutWorkshopInput {

    @Field(() => WorkshopDetailsWhereInput, {nullable:true})
    @Type(() => WorkshopDetailsWhereInput)
    where?: WorkshopDetailsWhereInput;

    @Field(() => WorkshopDetailsUpdateWithoutWorkshopInput, {nullable:false})
    @Type(() => WorkshopDetailsUpdateWithoutWorkshopInput)
    data!: WorkshopDetailsUpdateWithoutWorkshopInput;
}
