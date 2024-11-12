import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonWhereInput } from './person-where.input';
import { Type } from 'class-transformer';
import { PersonUpdateWithoutVehiclesInput } from './person-update-without-vehicles.input';

@InputType()
export class PersonUpdateToOneWithWhereWithoutVehiclesInput {

    @Field(() => PersonWhereInput, {nullable:true})
    @Type(() => PersonWhereInput)
    where?: PersonWhereInput;

    @Field(() => PersonUpdateWithoutVehiclesInput, {nullable:false})
    @Type(() => PersonUpdateWithoutVehiclesInput)
    data!: PersonUpdateWithoutVehiclesInput;
}
