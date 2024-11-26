import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JoinWorkshopRequestCreateManyUserInput } from './join-workshop-request-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class JoinWorkshopRequestCreateManyUserInputEnvelope {

    @Field(() => [JoinWorkshopRequestCreateManyUserInput], {nullable:false})
    @Type(() => JoinWorkshopRequestCreateManyUserInput)
    data!: Array<JoinWorkshopRequestCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
