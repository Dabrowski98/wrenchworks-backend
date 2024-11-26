import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutVehiclesInput } from './user-update-without-vehicles.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutVehiclesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutVehiclesInput, {nullable:false})
    @Type(() => UserUpdateWithoutVehiclesInput)
    data!: UserUpdateWithoutVehiclesInput;
}
