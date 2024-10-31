import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonCreateWithoutServiceRequestsInput } from './person-create-without-service-requests.input';
import { Type } from 'class-transformer';
import { PersonCreateOrConnectWithoutServiceRequestsInput } from './person-create-or-connect-without-service-requests.input';
import { PersonUpsertWithoutServiceRequestsInput } from './person-upsert-without-service-requests.input';
import { Prisma } from '@prisma/client';
import { PersonWhereUniqueInput } from './person-where-unique.input';
import { PersonUpdateToOneWithWhereWithoutServiceRequestsInput } from './person-update-to-one-with-where-without-service-requests.input';

@InputType()
export class PersonUpdateOneRequiredWithoutServiceRequestsNestedInput {

    @Field(() => PersonCreateWithoutServiceRequestsInput, {nullable:true})
    @Type(() => PersonCreateWithoutServiceRequestsInput)
    create?: PersonCreateWithoutServiceRequestsInput;

    @Field(() => PersonCreateOrConnectWithoutServiceRequestsInput, {nullable:true})
    @Type(() => PersonCreateOrConnectWithoutServiceRequestsInput)
    connectOrCreate?: PersonCreateOrConnectWithoutServiceRequestsInput;

    @Field(() => PersonUpsertWithoutServiceRequestsInput, {nullable:true})
    @Type(() => PersonUpsertWithoutServiceRequestsInput)
    upsert?: PersonUpsertWithoutServiceRequestsInput;

    @Field(() => PersonWhereUniqueInput, {nullable:true})
    @Type(() => PersonWhereUniqueInput)
    connect?: Prisma.AtLeast<PersonWhereUniqueInput, 'personId'>;

    @Field(() => PersonUpdateToOneWithWhereWithoutServiceRequestsInput, {nullable:true})
    @Type(() => PersonUpdateToOneWithWhereWithoutServiceRequestsInput)
    update?: PersonUpdateToOneWithWhereWithoutServiceRequestsInput;
}
