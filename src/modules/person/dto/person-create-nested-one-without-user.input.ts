import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonCreateWithoutUserInput } from './person-create-without-user.input';
import { Type } from 'class-transformer';
@InputType()
export class PersonCreateNestedOneWithoutUserInput {

    @Field(() => PersonCreateWithoutUserInput, {nullable:true})
    @Type(() => PersonCreateWithoutUserInput)
    create?: PersonCreateWithoutUserInput;
}
