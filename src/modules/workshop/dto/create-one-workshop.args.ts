import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopCreateInput } from './workshop-create.input';
import { Type } from 'class-transformer';
import * as Validator from 'class-validator';

@ArgsType()
export class CreateOneWorkshopArgs {

    @Field(() => WorkshopCreateInput, {nullable:false})
    @Type(() => WorkshopCreateInput)
    @Validator.ValidateNested()
    data!: WorkshopCreateInput;
}
