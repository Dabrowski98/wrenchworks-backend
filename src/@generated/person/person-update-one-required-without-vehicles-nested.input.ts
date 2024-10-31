import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonCreateWithoutVehiclesInput } from './person-create-without-vehicles.input';
import { Type } from 'class-transformer';
import { PersonCreateOrConnectWithoutVehiclesInput } from './person-create-or-connect-without-vehicles.input';
import { PersonUpsertWithoutVehiclesInput } from './person-upsert-without-vehicles.input';
import { Prisma } from '@prisma/client';
import { PersonWhereUniqueInput } from './person-where-unique.input';
import { PersonUpdateToOneWithWhereWithoutVehiclesInput } from './person-update-to-one-with-where-without-vehicles.input';

@InputType()
export class PersonUpdateOneRequiredWithoutVehiclesNestedInput {

    @Field(() => PersonCreateWithoutVehiclesInput, {nullable:true})
    @Type(() => PersonCreateWithoutVehiclesInput)
    create?: PersonCreateWithoutVehiclesInput;

    @Field(() => PersonCreateOrConnectWithoutVehiclesInput, {nullable:true})
    @Type(() => PersonCreateOrConnectWithoutVehiclesInput)
    connectOrCreate?: PersonCreateOrConnectWithoutVehiclesInput;

    @Field(() => PersonUpsertWithoutVehiclesInput, {nullable:true})
    @Type(() => PersonUpsertWithoutVehiclesInput)
    upsert?: PersonUpsertWithoutVehiclesInput;

    @Field(() => PersonWhereUniqueInput, {nullable:true})
    @Type(() => PersonWhereUniqueInput)
    connect?: Prisma.AtLeast<PersonWhereUniqueInput, 'personId'>;

    @Field(() => PersonUpdateToOneWithWhereWithoutVehiclesInput, {nullable:true})
    @Type(() => PersonUpdateToOneWithWhereWithoutVehiclesInput)
    update?: PersonUpdateToOneWithWhereWithoutVehiclesInput;
}
