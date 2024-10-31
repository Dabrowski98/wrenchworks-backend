import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonUpdateWithoutCustomersInput } from './person-update-without-customers.input';
import { Type } from 'class-transformer';
import { PersonCreateWithoutCustomersInput } from './person-create-without-customers.input';
import { PersonWhereInput } from './person-where.input';

@InputType()
export class PersonUpsertWithoutCustomersInput {

    @Field(() => PersonUpdateWithoutCustomersInput, {nullable:false})
    @Type(() => PersonUpdateWithoutCustomersInput)
    update!: PersonUpdateWithoutCustomersInput;

    @Field(() => PersonCreateWithoutCustomersInput, {nullable:false})
    @Type(() => PersonCreateWithoutCustomersInput)
    create!: PersonCreateWithoutCustomersInput;

    @Field(() => PersonWhereInput, {nullable:true})
    @Type(() => PersonWhereInput)
    where?: PersonWhereInput;
}
