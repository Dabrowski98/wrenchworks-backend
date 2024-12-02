import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionDataCreateManyInput } from './session-data-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManySessionDataArgs {

    @Field(() => [SessionDataCreateManyInput], {nullable:false})
    @Type(() => SessionDataCreateManyInput)
    @ValidateNested()
    data!: Array<SessionDataCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
