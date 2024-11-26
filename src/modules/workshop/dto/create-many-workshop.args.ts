import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopCreateManyInput } from './workshop-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManyWorkshopArgs {

    @Field(() => [WorkshopCreateManyInput], {nullable:false})
    @Type(() => WorkshopCreateManyInput)
    @ValidateNested()
    data!: Array<WorkshopCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
