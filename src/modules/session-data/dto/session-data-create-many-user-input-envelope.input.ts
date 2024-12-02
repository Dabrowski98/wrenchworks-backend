import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionDataCreateManyUserInput } from './session-data-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class SessionDataCreateManyUserInputEnvelope {

    @Field(() => [SessionDataCreateManyUserInput], {nullable:false})
    @Type(() => SessionDataCreateManyUserInput)
    data!: Array<SessionDataCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
