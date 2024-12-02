import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionDataCreateInput } from './session-data-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneSessionDataArgs {

    @Field(() => SessionDataCreateInput, {nullable:false})
    @Type(() => SessionDataCreateInput)
    @ValidateNested()
    data!: SessionDataCreateInput;
}
