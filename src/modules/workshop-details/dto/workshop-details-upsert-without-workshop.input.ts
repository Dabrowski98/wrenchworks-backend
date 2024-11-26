import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopDetailsUpdateWithoutWorkshopInput } from './workshop-details-update-without-workshop.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopDetailsCreateWithoutWorkshopInput } from './workshop-details-create-without-workshop.input';
import { WorkshopDetailsWhereInput } from './workshop-details-where.input';

@InputType()
export class WorkshopDetailsUpsertWithoutWorkshopInput {

    @Field(() => WorkshopDetailsUpdateWithoutWorkshopInput, {nullable:false})
    @Type(() => WorkshopDetailsUpdateWithoutWorkshopInput)
    @ValidateNested()
    update!: WorkshopDetailsUpdateWithoutWorkshopInput;

    @Field(() => WorkshopDetailsCreateWithoutWorkshopInput, {nullable:false})
    @Type(() => WorkshopDetailsCreateWithoutWorkshopInput)
    @ValidateNested()
    create!: WorkshopDetailsCreateWithoutWorkshopInput;

    @Field(() => WorkshopDetailsWhereInput, {nullable:true})
    @Type(() => WorkshopDetailsWhereInput)
    where?: WorkshopDetailsWhereInput;
}
