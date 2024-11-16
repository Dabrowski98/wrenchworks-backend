import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonCreateWithoutCustomersInput } from './person-create-without-customers.input';
import { Type } from 'class-transformer';
import { PersonCreateOrConnectWithoutCustomersInput } from './person-create-or-connect-without-customers.input';
import { Prisma } from '@prisma/client';
import { PersonWhereUniqueInput } from './person-where-unique.input';

@InputType()
export class PersonCreateNestedOneWithoutCustomersInput {

    @Field(() => PersonCreateOrConnectWithoutCustomersInput, {nullable:true})
    @Type(() => PersonCreateOrConnectWithoutCustomersInput)
    connectOrCreate?: PersonCreateOrConnectWithoutCustomersInput;
    
}
