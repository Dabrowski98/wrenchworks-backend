import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JoinWorkshopRequestWhereInput } from './join-workshop-request-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyJoinWorkshopRequestArgs {

    @Field(() => JoinWorkshopRequestWhereInput, {nullable:true})
    @Type(() => JoinWorkshopRequestWhereInput)
    where?: JoinWorkshopRequestWhereInput;
}
