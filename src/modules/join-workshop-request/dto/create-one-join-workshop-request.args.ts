import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JoinWorkshopRequestCreateInput } from './join-workshop-request-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneJoinWorkshopRequestArgs {

    @Field(() => JoinWorkshopRequestCreateInput, {nullable:false})
    @Type(() => JoinWorkshopRequestCreateInput)
    @ValidateNested()
    data!: JoinWorkshopRequestCreateInput;
}
