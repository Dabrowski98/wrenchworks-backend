import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionDataWhereInput } from './session-data-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManySessionDataArgs {

    @Field(() => SessionDataWhereInput, {nullable:true})
    @Type(() => SessionDataWhereInput)
    where?: SessionDataWhereInput;
}
