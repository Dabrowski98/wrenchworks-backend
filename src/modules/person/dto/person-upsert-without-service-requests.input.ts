import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonUpdateWithoutServiceRequestsInput } from './person-update-without-service-requests.input';
import { Type } from 'class-transformer';
import { PersonCreateWithoutServiceRequestsInput } from './person-create-without-service-requests.input';
import { PersonWhereInput } from './person-where.input';

@InputType()
export class PersonUpsertWithoutServiceRequestsInput {

    @Field(() => PersonUpdateWithoutServiceRequestsInput, {nullable:false})
    @Type(() => PersonUpdateWithoutServiceRequestsInput)
    update!: PersonUpdateWithoutServiceRequestsInput;

    @Field(() => PersonCreateWithoutServiceRequestsInput, {nullable:false})
    @Type(() => PersonCreateWithoutServiceRequestsInput)
    create!: PersonCreateWithoutServiceRequestsInput;

    @Field(() => PersonWhereInput, {nullable:true})
    @Type(() => PersonWhereInput)
    where?: PersonWhereInput;
}
