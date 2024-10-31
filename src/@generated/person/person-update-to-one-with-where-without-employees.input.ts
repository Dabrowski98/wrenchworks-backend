import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonWhereInput } from './person-where.input';
import { Type } from 'class-transformer';
import { PersonUpdateWithoutEmployeesInput } from './person-update-without-employees.input';

@InputType()
export class PersonUpdateToOneWithWhereWithoutEmployeesInput {

    @Field(() => PersonWhereInput, {nullable:true})
    @Type(() => PersonWhereInput)
    where?: PersonWhereInput;

    @Field(() => PersonUpdateWithoutEmployeesInput, {nullable:false})
    @Type(() => PersonUpdateWithoutEmployeesInput)
    data!: PersonUpdateWithoutEmployeesInput;
}
