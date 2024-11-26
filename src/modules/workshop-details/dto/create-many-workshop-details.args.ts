import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDetailsCreateManyInput } from './workshop-details-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManyWorkshopDetailsArgs {

    @Field(() => [WorkshopDetailsCreateManyInput], {nullable:false})
    @Type(() => WorkshopDetailsCreateManyInput)
    @ValidateNested()
    data!: Array<WorkshopDetailsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
