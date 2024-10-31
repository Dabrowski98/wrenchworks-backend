import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonWhereInput } from './person-where.input';
import { Type } from 'class-transformer';
import { PersonUpdateWithoutCustomersInput } from './person-update-without-customers.input';

@InputType()
export class PersonUpdateToOneWithWhereWithoutCustomersInput {

    @Field(() => PersonWhereInput, {nullable:true})
    @Type(() => PersonWhereInput)
    where?: PersonWhereInput;

    @Field(() => PersonUpdateWithoutCustomersInput, {nullable:false})
    @Type(() => PersonUpdateWithoutCustomersInput)
    data!: PersonUpdateWithoutCustomersInput;
}
