import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonCreateWithoutEmployeesInput } from './person-create-without-employees.input';
import { Type } from 'class-transformer';
import { PersonCreateOrConnectWithoutEmployeesInput } from './person-create-or-connect-without-employees.input';
import { Prisma } from '@prisma/client';
import { PersonWhereUniqueInput } from './person-where-unique.input';

@InputType()
export class PersonCreateNestedOneWithoutEmployeesInput {

    @Field(() => PersonCreateWithoutEmployeesInput, {nullable:true})
    @Type(() => PersonCreateWithoutEmployeesInput)
    create?: PersonCreateWithoutEmployeesInput;

    @Field(() => PersonCreateOrConnectWithoutEmployeesInput, {nullable:true})
    @Type(() => PersonCreateOrConnectWithoutEmployeesInput)
    connectOrCreate?: PersonCreateOrConnectWithoutEmployeesInput;

    @Field(() => PersonWhereUniqueInput, {nullable:true})
    @Type(() => PersonWhereUniqueInput)
    connect?: Prisma.AtLeast<PersonWhereUniqueInput, 'personId'>;
}
