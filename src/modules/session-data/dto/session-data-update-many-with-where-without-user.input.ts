import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionDataScalarWhereInput } from './session-data-scalar-where.input';
import { Type } from 'class-transformer';
import { SessionDataUpdateManyMutationInput } from './session-data-update-many-mutation.input';

@InputType()
export class SessionDataUpdateManyWithWhereWithoutUserInput {

    @Field(() => SessionDataScalarWhereInput, {nullable:false})
    @Type(() => SessionDataScalarWhereInput)
    where!: SessionDataScalarWhereInput;

    @Field(() => SessionDataUpdateManyMutationInput, {nullable:false})
    @Type(() => SessionDataUpdateManyMutationInput)
    data!: SessionDataUpdateManyMutationInput;
}
