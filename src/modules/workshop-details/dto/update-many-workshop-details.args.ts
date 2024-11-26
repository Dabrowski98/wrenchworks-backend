import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDetailsUpdateManyMutationInput } from './workshop-details-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopDetailsWhereInput } from './workshop-details-where.input';

@ArgsType()
export class UpdateManyWorkshopDetailsArgs {

    @Field(() => WorkshopDetailsUpdateManyMutationInput, {nullable:false})
    @Type(() => WorkshopDetailsUpdateManyMutationInput)
    @ValidateNested()
    data!: WorkshopDetailsUpdateManyMutationInput;

    @Field(() => WorkshopDetailsWhereInput, {nullable:true})
    @Type(() => WorkshopDetailsWhereInput)
    where?: WorkshopDetailsWhereInput;
}
