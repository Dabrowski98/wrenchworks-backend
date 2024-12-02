import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionDataUpdateManyMutationInput } from './session-data-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { SessionDataWhereInput } from './session-data-where.input';

@ArgsType()
export class UpdateManySessionDataArgs {

    @Field(() => SessionDataUpdateManyMutationInput, {nullable:false})
    @Type(() => SessionDataUpdateManyMutationInput)
    @ValidateNested()
    data!: SessionDataUpdateManyMutationInput;

    @Field(() => SessionDataWhereInput, {nullable:true})
    @Type(() => SessionDataWhereInput)
    where?: SessionDataWhereInput;
}
