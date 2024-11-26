import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutVehiclesInput } from './user-create-without-vehicles.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class UserCreateOrConnectWithoutVehiclesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'addressId'>;

    @Field(() => UserCreateWithoutVehiclesInput, {nullable:false})
    @Type(() => UserCreateWithoutVehiclesInput)
    @ValidateNested()
    create!: UserCreateWithoutVehiclesInput;
}
