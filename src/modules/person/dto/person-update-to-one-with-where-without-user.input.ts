import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonWhereInput } from './person-where.input';
import { Type } from 'class-transformer';
import { PersonUpdateWithoutUserInput } from './person-update-without-user.input';

@InputType()
export class PersonUpdateToOneWithWhereWithoutUserInput {

    @Field(() => PersonWhereInput, {nullable:true})
    @Type(() => PersonWhereInput)
    where?: PersonWhereInput;

    @Field(() => PersonUpdateWithoutUserInput, {nullable:false})
    @Type(() => PersonUpdateWithoutUserInput)
    data!: PersonUpdateWithoutUserInput;
}
