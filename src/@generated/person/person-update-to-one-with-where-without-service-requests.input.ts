import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonWhereInput } from './person-where.input';
import { Type } from 'class-transformer';
import { PersonUpdateWithoutServiceRequestsInput } from './person-update-without-service-requests.input';

@InputType()
export class PersonUpdateToOneWithWhereWithoutServiceRequestsInput {

    @Field(() => PersonWhereInput, {nullable:true})
    @Type(() => PersonWhereInput)
    where?: PersonWhereInput;

    @Field(() => PersonUpdateWithoutServiceRequestsInput, {nullable:false})
    @Type(() => PersonUpdateWithoutServiceRequestsInput)
    data!: PersonUpdateWithoutServiceRequestsInput;
}
