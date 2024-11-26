import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutVehiclesInput } from './user-update-without-vehicles.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UserCreateWithoutVehiclesInput } from './user-create-without-vehicles.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutVehiclesInput {

    @Field(() => UserUpdateWithoutVehiclesInput, {nullable:false})
    @Type(() => UserUpdateWithoutVehiclesInput)
    @ValidateNested()
    update!: UserUpdateWithoutVehiclesInput;

    @Field(() => UserCreateWithoutVehiclesInput, {nullable:false})
    @Type(() => UserCreateWithoutVehiclesInput)
    @ValidateNested()
    create!: UserCreateWithoutVehiclesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
