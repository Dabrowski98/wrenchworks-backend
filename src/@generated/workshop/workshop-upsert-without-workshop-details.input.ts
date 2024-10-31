import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopUpdateWithoutWorkshopDetailsInput } from './workshop-update-without-workshop-details.input';
import { Type } from 'class-transformer';
import { WorkshopCreateWithoutWorkshopDetailsInput } from './workshop-create-without-workshop-details.input';
import { WorkshopWhereInput } from './workshop-where.input';

@InputType()
export class WorkshopUpsertWithoutWorkshopDetailsInput {

    @Field(() => WorkshopUpdateWithoutWorkshopDetailsInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutWorkshopDetailsInput)
    update!: WorkshopUpdateWithoutWorkshopDetailsInput;

    @Field(() => WorkshopCreateWithoutWorkshopDetailsInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutWorkshopDetailsInput)
    create!: WorkshopCreateWithoutWorkshopDetailsInput;

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;
}
