import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDetailsWhereInput } from './workshop-details-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyWorkshopDetailsArgs {

    @Field(() => WorkshopDetailsWhereInput, {nullable:true})
    @Type(() => WorkshopDetailsWhereInput)
    where?: WorkshopDetailsWhereInput;
}
