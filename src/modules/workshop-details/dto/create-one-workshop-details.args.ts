import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDetailsCreateInput } from './workshop-details-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneWorkshopDetailsArgs {

    @Field(() => WorkshopDetailsCreateInput, {nullable:false})
    @Type(() => WorkshopDetailsCreateInput)
    data!: WorkshopDetailsCreateInput;
}
