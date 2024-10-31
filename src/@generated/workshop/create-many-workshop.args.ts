import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopCreateManyInput } from './workshop-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyWorkshopArgs {

    @Field(() => [WorkshopCreateManyInput], {nullable:false})
    @Type(() => WorkshopCreateManyInput)
    data!: Array<WorkshopCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
