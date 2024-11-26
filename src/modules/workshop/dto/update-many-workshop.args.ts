import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopUpdateManyMutationInput } from './workshop-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopWhereInput } from './workshop-where.input';

@ArgsType()
export class UpdateManyWorkshopArgs {

    @Field(() => WorkshopUpdateManyMutationInput, {nullable:false})
    @Type(() => WorkshopUpdateManyMutationInput)
    @ValidateNested()
    data!: WorkshopUpdateManyMutationInput;

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;
}
