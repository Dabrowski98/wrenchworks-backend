import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDetailsCreateInput } from './workshop-details-create.input';
import { Type } from 'class-transformer';
import * as Validator from 'class-validator';

@ArgsType()
export class CreateOneWorkshopDetailsArgs {

    @Field(() => WorkshopDetailsCreateInput, {nullable:false})
    @Type(() => WorkshopDetailsCreateInput)
    @Validator.ValidateNested()
    data!: WorkshopDetailsCreateInput;
}
