import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PersonWhereUniqueInput } from './person-where-unique.input';
import { Type } from 'class-transformer';
import { PersonCreateWithoutServiceRequestsInput } from './person-create-without-service-requests.input';

@InputType()
export class PersonCreateOrConnectWithoutServiceRequestsInput {

    @Field(() => PersonWhereUniqueInput, {nullable:false})
    @Type(() => PersonWhereUniqueInput)
    where!: Prisma.AtLeast<PersonWhereUniqueInput, 'personId'>;

    @Field(() => PersonCreateWithoutServiceRequestsInput, {nullable:false})
    @Type(() => PersonCreateWithoutServiceRequestsInput)
    create!: PersonCreateWithoutServiceRequestsInput;
}
