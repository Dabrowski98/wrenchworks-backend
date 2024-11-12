import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonUpdateWithoutVehiclesInput } from './person-update-without-vehicles.input';
import { Type } from 'class-transformer';
import { PersonCreateWithoutVehiclesInput } from './person-create-without-vehicles.input';
import { PersonWhereInput } from './person-where.input';

@InputType()
export class PersonUpsertWithoutVehiclesInput {

    @Field(() => PersonUpdateWithoutVehiclesInput, {nullable:false})
    @Type(() => PersonUpdateWithoutVehiclesInput)
    update!: PersonUpdateWithoutVehiclesInput;

    @Field(() => PersonCreateWithoutVehiclesInput, {nullable:false})
    @Type(() => PersonCreateWithoutVehiclesInput)
    create!: PersonCreateWithoutVehiclesInput;

    @Field(() => PersonWhereInput, {nullable:true})
    @Type(() => PersonWhereInput)
    where?: PersonWhereInput;
}
