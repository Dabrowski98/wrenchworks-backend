import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PersonWhereUniqueInput } from './person-where-unique.input';
import { Type } from 'class-transformer';
import { PersonCreateWithoutVehiclesInput } from './person-create-without-vehicles.input';

@InputType()
export class PersonCreateOrConnectWithoutVehiclesInput {

    @Field(() => PersonWhereUniqueInput, {nullable:false})
    @Type(() => PersonWhereUniqueInput)
    where!: Prisma.AtLeast<PersonWhereUniqueInput, 'personId'>;

    @Field(() => PersonCreateWithoutVehiclesInput, {nullable:false})
    @Type(() => PersonCreateWithoutVehiclesInput)
    create!: PersonCreateWithoutVehiclesInput;
}
