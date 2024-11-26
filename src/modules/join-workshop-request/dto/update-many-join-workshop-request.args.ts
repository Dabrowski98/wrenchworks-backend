import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JoinWorkshopRequestUpdateManyMutationInput } from './join-workshop-request-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { JoinWorkshopRequestWhereInput } from './join-workshop-request-where.input';

@ArgsType()
export class UpdateManyJoinWorkshopRequestArgs {

    @Field(() => JoinWorkshopRequestUpdateManyMutationInput, {nullable:false})
    @Type(() => JoinWorkshopRequestUpdateManyMutationInput)
    @ValidateNested()
    data!: JoinWorkshopRequestUpdateManyMutationInput;

    @Field(() => JoinWorkshopRequestWhereInput, {nullable:true})
    @Type(() => JoinWorkshopRequestWhereInput)
    where?: JoinWorkshopRequestWhereInput;
}
