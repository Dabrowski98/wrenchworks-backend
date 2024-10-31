import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonWhereInput } from './person-where.input';
import { Type } from 'class-transformer';
import { PersonUpdateWithoutWorkshopsInput } from './person-update-without-workshops.input';

@InputType()
export class PersonUpdateToOneWithWhereWithoutWorkshopsInput {

    @Field(() => PersonWhereInput, {nullable:true})
    @Type(() => PersonWhereInput)
    where?: PersonWhereInput;

    @Field(() => PersonUpdateWithoutWorkshopsInput, {nullable:false})
    @Type(() => PersonUpdateWithoutWorkshopsInput)
    data!: PersonUpdateWithoutWorkshopsInput;
}
