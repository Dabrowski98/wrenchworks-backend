import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonUpdateWithoutWorkshopsInput } from './person-update-without-workshops.input';
import { Type } from 'class-transformer';
import { PersonCreateWithoutWorkshopsInput } from './person-create-without-workshops.input';
import { PersonWhereInput } from './person-where.input';

@InputType()
export class PersonUpsertWithoutWorkshopsInput {

    @Field(() => PersonUpdateWithoutWorkshopsInput, {nullable:false})
    @Type(() => PersonUpdateWithoutWorkshopsInput)
    update!: PersonUpdateWithoutWorkshopsInput;

    @Field(() => PersonCreateWithoutWorkshopsInput, {nullable:false})
    @Type(() => PersonCreateWithoutWorkshopsInput)
    create!: PersonCreateWithoutWorkshopsInput;

    @Field(() => PersonWhereInput, {nullable:true})
    @Type(() => PersonWhereInput)
    where?: PersonWhereInput;
}
