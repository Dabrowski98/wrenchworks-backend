import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonUpdateWithoutEmployeesInput } from './person-update-without-employees.input';
import { Type } from 'class-transformer';
import { PersonCreateWithoutEmployeesInput } from './person-create-without-employees.input';
import { PersonWhereInput } from './person-where.input';

@InputType()
export class PersonUpsertWithoutEmployeesInput {

    @Field(() => PersonUpdateWithoutEmployeesInput, {nullable:false})
    @Type(() => PersonUpdateWithoutEmployeesInput)
    update!: PersonUpdateWithoutEmployeesInput;

    @Field(() => PersonCreateWithoutEmployeesInput, {nullable:false})
    @Type(() => PersonCreateWithoutEmployeesInput)
    create!: PersonCreateWithoutEmployeesInput;

    @Field(() => PersonWhereInput, {nullable:true})
    @Type(() => PersonWhereInput)
    where?: PersonWhereInput;
}
