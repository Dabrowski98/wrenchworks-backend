import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopCreateInput } from './workshop-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneWorkshopArgs {

    @Field(() => WorkshopCreateInput, {nullable:false})
    @Type(() => WorkshopCreateInput)
    @ValidateNested()
    data!: WorkshopCreateInput;
}
